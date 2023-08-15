package com.kb.report.report.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.kb.report.news.dto.NewsResponseDto;
import com.kb.report.news.entity.News;
import com.kb.report.news.repository.NewsRepository;
import com.kb.report.news.service.NewsService;
import com.kb.report.report.dto.ReportResponseDto;
import com.kb.report.report.entity.Report;
import com.kb.report.report.repository.ReportRepository;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.StringTokenizer;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@RequiredArgsConstructor
public class ReportService {

  private final ReportRepository reportRepository;
  private final NewsRepository newsRepository;
  private final NewsService newsService;
  private final RestTemplate restTemplate;
  private final String apiKey;
  private final String url;
  private final String model;
  private final int maxTokens;
  private final double temperature;
  private final int topP;
  private final int frequencyPenalty;
  private final int presencePenalty;

  //날짜별로 리포트 만들어주는 메소드
  public void makeReport(LocalDate date) throws JsonProcessingException {
    List<NewsResponseDto> list = newsService.searchNews(date);

    //기사 요약
    for (int i = 0; i < list.size(); i++) {
      String prompt = "이 내용을 한국어 기준 두 문장으로 주요 의제를 어르신에게 말하듯 존댓말로 요약해 주세요.\n";
      Report report = new Report();
      News news = newsRepository.findById(list.get(i).getId());
      report.setNews(news);
      report.setNewsDate(news.getNewsDate());

      List<String> chunk = chunkText(list.get(i).getContents(), 1000);

      String summary = gpt(prompt + chunk.get(0));
      for (int j = 1; j < chunk.size(); j++)
        summary += gpt(prompt + chunk.get(j));
      report.setSummary(summary);

      //제목 + 퀴즈
      prompt = "이 내용에서 나온 금융, 경제 관련 어려운 단어를 하나 뽑아서 그 단어에 대한 금융 퀴즈 1개를 만들어줘. 퀴즈에는 문제 1개, 2개의 선택지가 있어야 해. 그리고 이 문제에 대한 해설도 줘. 해설은 단어에 대한 상세한 설명을 적어줘. 그리고 이 내용의 제목을 지어줘. 형식은 \"[문제]@[선택지1]@[선택지2]@[해설]@[제목]\" 이 형태로 각 항목을 [] 안에 넣어줘." + summary;
      String t = gpt(prompt);
      System.out.println(t);
      StringTokenizer st = new StringTokenizer(t, "@");
      report.setQuestion(st.nextToken());
      report.setAns1(st.nextToken());
      report.setAns2(st.nextToken());
      report.setExplanation(st.nextToken());
      report.setTitle(st.nextToken());

      reportRepository.save(report);
    }
  }

  //날짜별로 리포트 조회하는 메소드
  public List<ReportResponseDto> searchReport(LocalDate date) {
    Optional<List<ReportResponseDto>> check = reportRepository.findByNewsDate(date);
    if (!check.isPresent()) {
      throw new IllegalArgumentException("해당 날짜의 리포트가 없습니다.");
    }
    return check.get();
  }

  private String gpt(String text) throws JsonProcessingException {
    String prompt = text;
    HttpHeaders headers = new HttpHeaders();
    headers.setContentType(MediaType.APPLICATION_JSON);
    headers.set("Authorization", "Bearer " + apiKey);

    ObjectMapper objectMapper = new ObjectMapper();

    //davinci에서는 안 쓰는 것 같은데 다른 모델에선 이거 써야 통신 형식에 맞는듯. 그래서 남겨둠.
    List<Map<String, String>> messages = new ArrayList<>();
    Map<String, String> userMessage = new HashMap<>();
    userMessage.put("role", "user");
    userMessage.put("content", prompt);
    messages.add(userMessage);

    // Create a JSON object representing the request
    Map<String, Object> requestBody = new HashMap<>();
    requestBody.put("prompt", prompt);
    requestBody.put("max_tokens", maxTokens);
    requestBody.put("temperature", temperature);
    requestBody.put("top_p", topP);
    requestBody.put("frequency_penalty", frequencyPenalty);
    requestBody.put("presence_penalty", presencePenalty);
    requestBody.put("model", model);

    String jsonBody = objectMapper.writeValueAsString(requestBody);
    System.out.println(jsonBody);
    HttpEntity<String> requestEntity = new HttpEntity<>(jsonBody, headers);

    // GPT-3에 요청을 보내고 JSON 응답 받기
    ResponseEntity<Map> response = restTemplate.exchange(url, HttpMethod.POST, requestEntity, Map.class);
    Map<String, Object> responseBody = response.getBody();

    // "choices" 필드에서 요약된 텍스트 추출
    List<Map<String, Object>> choices = (List<Map<String, Object>>) responseBody.get("choices");
    return (String) choices.get(0).get("text");
  }

  // 텍스트를 최대 길이로 나누는 메서드 (4096 글자 이하로 나누기)
  private List<String> chunkText(String text, int chunkSize) {
    List<String> chunks = new ArrayList<>();
    for (int i = 0; i < text.length(); i += chunkSize) {
      int end = Math.min(i + chunkSize, text.length());
      chunks.add(text.substring(i, end));
    }
    return chunks;
  }
}
