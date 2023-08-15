package com.kb.report.config;

import com.kb.report.news.repository.NewsRepository;
import com.kb.report.news.service.NewsService;
import com.kb.report.report.repository.ReportRepository;
import com.kb.report.report.service.ReportService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class GptConfig {

  @Bean
  public RestTemplate restTemplate() {
    return new RestTemplate();
  }

  @Bean
  public ReportService reportService(
      ReportRepository reportRepository,
      NewsRepository newsRepository,
      NewsService newsService,
      RestTemplate restTemplate,
      @Value("${gpt.api-key}") String apiKey,
      @Value("${gpt.url}") String url,
      @Value("${gpt.model}") String model,
      @Value("${gpt.max-tokens}") int maxTokens,
      @Value("${gpt.temperature}") double temperature,
      @Value("${gpt.top-p}") int topP,
      @Value("${gpt.frequency-penalty}") int frequencyPenalty,
      @Value("${gpt.presence-penalty}") int presencePenalty
  ) {
    return new ReportService (reportRepository, newsRepository, newsService, restTemplate, apiKey, url, model, maxTokens, temperature, topP, frequencyPenalty, presencePenalty);
  }
}

