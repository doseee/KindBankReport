package com.kb.report.bookmark.repository;

import com.kb.report.bookmark.entity.Bookmark;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface BookmarkRepository extends JpaRepository<Bookmark, Integer> {
  @Query("select b.explanation "
      + "from Bookmark b "
      + "where b.member.memberId =:memberId")
  Optional<List<String>> findByMemberId(String memberId);
}
