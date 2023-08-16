package com.kb.report.bookmark.service;

import com.kb.report.bookmark.entity.Bookmark;
import com.kb.report.bookmark.repository.BookmarkRepository;
import com.kb.report.member.repository.MemberRepository;
import com.kb.report.report.repository.ReportRepository;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BookmarkService {
  private final BookmarkRepository bookmarkRepository;
  private final ReportRepository reportRepository;
  private final MemberRepository memberRepository;

  //북마크 저장
  public void saveBookmark(String memberId, int reportId) {
    Bookmark bookmark = new Bookmark();
    bookmark.setMember(memberRepository.findByMemberId(memberId).get());
    bookmark.setReport(reportRepository.findById(reportId).get());
    bookmark.setExplanation(bookmark.getReport().getExplanation());

    bookmarkRepository.save(bookmark);
  }

  //북마크 조회
  public List<String> searchBookmark(String memberId) {
    Optional<List<String>> list = bookmarkRepository.findByMemberId(memberId);
    if (!list.isPresent()) {
      throw new IllegalArgumentException("북마크가 존재하지 않습니다.");
    }
    return list.get();
  }
}
