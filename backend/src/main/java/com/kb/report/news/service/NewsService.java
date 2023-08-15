package com.kb.report.news.service;

import com.kb.report.news.dto.NewsResponseDto;
import com.kb.report.news.repository.NewsRepository;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class NewsService {

  private final NewsRepository newsRepository;

  //날짜별 조회
  public List<NewsResponseDto> searchNews(LocalDate date) {
    Optional<List<NewsResponseDto>> check = newsRepository.findByNewsDate(date);
    if (!check.isPresent()) {
      throw new IllegalArgumentException("해당 날짜의 뉴스가 없습니다.");
    }
    return check.get();
  }
}
