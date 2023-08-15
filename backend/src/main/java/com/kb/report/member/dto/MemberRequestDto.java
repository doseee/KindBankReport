package com.kb.report.member.dto;

import com.kb.report.member.entity.Member;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MemberRequestDto {

  private String memberId;
  private String password;

  public Member toEntity() {
    return Member.builder()
        .memberId(memberId)
        .password(password)
        .build();
  }
}
