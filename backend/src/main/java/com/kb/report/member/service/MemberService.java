package com.kb.report.member.service;

import com.kb.report.member.dto.MemberRequestDto;
import com.kb.report.member.entity.Member;
import com.kb.report.member.repository.MemberRepository;
import java.util.Optional;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {

  private final MemberRepository memberRepository;

  @Transactional //회원가입
  public void saveMember(MemberRequestDto dto) {
    Optional<Member> check = memberRepository.findByMemberId(dto.getMemberId());
    if (check.isPresent()) {
      throw new IllegalArgumentException("이미 존재하는 아이디입니다.");
    }
    Member member = dto.toEntity();
    memberRepository.save(member);
  }

  //로그인
  public String loginMember(MemberRequestDto dto) {
    Optional<Member> member = memberRepository.findByMemberId(dto.getMemberId());
    if (member.isPresent()) {
      if (!dto.getPassword().equals(member.get().getPassword()))
        throw new IllegalArgumentException("비밀번호가 일치하지 않습니다.");
    }
    else
      throw new IllegalArgumentException("존재하지 않는 ID입니다.");

    return dto.getMemberId();
  }
}
