package com.kb.report.news.dto;

import com.kb.report.news.entity.News;
import java.time.LocalDate;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NewsResponseDto {
  private int id;
  private LocalDate newsDate;
  private String contents;

  public NewsResponseDto(News entity) {
    this.id = entity.getId();
    this.newsDate = entity.getNewsDate();
    this.contents = entity.getContents();
  }
}
