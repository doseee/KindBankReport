package com.kb.report.report.dto;

import com.kb.report.report.entity.Report;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReportResponseDto {
  private int reportId;
  private String title;
  private String summary;
  private String question;
  private String ans1;
  private String ans2;
  private String explanation;

  public ReportResponseDto(Report entity) {
    this.reportId = entity.getId();
    this.title = entity.getTitle();
    this.summary = entity.getSummary();
    this.question = entity.getQuestion();
    this.ans1 = entity.getAns1();
    this.ans2 = entity.getAns2();
    this.explanation = entity.getExplanation();
  }
}
