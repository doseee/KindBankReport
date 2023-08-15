package com.kb.report.member.entity;

import javax.persistence.*;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Member {
  @Id
  @GeneratedValue(strategy= GenerationType.IDENTITY)
  private int id;
  @Column(name = "member_id")
  private String memberId;
  @Column(name = "password")
  private String password;
}
