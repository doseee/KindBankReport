package com.kb.report.report.repository;

import com.kb.report.report.dto.ReportResponseDto;
import com.kb.report.report.entity.Report;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ReportRepository extends JpaRepository<Report, Integer> {
  @Query("select new com.kb.report.report.dto.ReportResponseDto(r) "
      + "from Report r "
      + "where r.newsDate =:date")
  Optional<List<ReportResponseDto>> findByNewsDate(LocalDate date);
}
