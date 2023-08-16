package com.kb.report.bookmark.entity;

import com.kb.report.member.entity.Member;
import com.kb.report.report.entity.Report;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Bookmark {
  @Id
  @GeneratedValue(strategy= GenerationType.IDENTITY)
  private int id;
  @ManyToOne
  @JoinColumn(name="member_id", nullable = false)
  private Member member;
  @OneToOne
  @JoinColumn(name = "report_id", nullable = false)
  private Report report;
  @Column(length = 1000)
  private String explanation;
}
