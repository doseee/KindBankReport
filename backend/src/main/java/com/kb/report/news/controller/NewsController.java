package com.kb.report.news.controller;

import com.kb.report.news.dto.NewsResponseDto;
import com.kb.report.news.service.NewsService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import java.time.LocalDate;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api("News Controller")
@RequiredArgsConstructor
@RequestMapping("/news")
@RestController
public class NewsController {

  private final NewsService newsService;

  @ApiOperation(value = "날짜별 기사 조회(yyyy-mm-dd)")
  @GetMapping("/search/{date}")
  public ResponseEntity<?> searchNews(@PathVariable String date) {
    try {
      List<NewsResponseDto> list = newsService.searchNews(LocalDate.parse(date));
      return new ResponseEntity<List<NewsResponseDto>>(list, HttpStatus.OK);
    } catch (Exception e) {
      e.printStackTrace();
      return ResponseEntity.badRequest().body(e.getMessage());
    }
  }
}
