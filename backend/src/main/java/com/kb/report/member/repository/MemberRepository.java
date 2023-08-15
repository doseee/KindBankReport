package com.kb.report.member.repository;

import com.kb.report.member.entity.Member;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, Integer> {
  Optional<Member> findByMemberId(String memberId);
}
