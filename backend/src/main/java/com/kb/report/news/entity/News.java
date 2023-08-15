package com.kb.report.news.entity;

import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class News {
  @Id
  @GeneratedValue(strategy= GenerationType.IDENTITY)
  private int id;
  @Column(name = "news_date")
  private LocalDate newsDate;
  private String url;
  private String site;
  private String contents;
}
