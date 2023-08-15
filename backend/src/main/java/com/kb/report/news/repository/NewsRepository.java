package com.kb.report.news.repository;

import com.kb.report.news.dto.NewsResponseDto;
import com.kb.report.news.entity.News;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsRepository extends JpaRepository<News, Integer> {
  @Query("select new com.kb.report.news.dto.NewsResponseDto(n) "
      + "from News n "
      + "where n.newsDate =:date")
  Optional<List<NewsResponseDto>> findByNewsDate(LocalDate date);
  News findById(int id);
}
