package com.kb.report.report.entity;

import com.kb.report.news.entity.News;
import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Report {
  @Id
  @GeneratedValue(strategy= GenerationType.IDENTITY)
  private int id;
  @OneToOne
  @JoinColumn(name="news_id", nullable = false)
  private News news;
  @Column(name = "news_date")
  private LocalDate newsDate;
  @Column( length = 1000)
  private String title;
  @Column(length = 1000)
  private String summary;
  @Column(length = 1000)
  private String question;
  @Column(length = 1000)
  private String ans1;
  @Column(length = 1000)
  private String ans2;
  @Column(length = 1000)
  private String explanation;
}
