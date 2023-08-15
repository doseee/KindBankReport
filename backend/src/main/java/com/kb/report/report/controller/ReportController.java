package com.kb.report.report.controller;

import com.kb.report.report.dto.ReportResponseDto;
import com.kb.report.report.service.ReportService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import java.time.LocalDate;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api("Report Controller")
@RequiredArgsConstructor
@RequestMapping("/report")
@RestController
public class ReportController {

  private final ReportService reportService;


  @ApiOperation(value = "날짜별 리포트 만들기")
  @GetMapping("/make/{date}")
  public ResponseEntity<?> makeReport(@PathVariable String date){
    try {
      reportService.makeReport(LocalDate.parse(date));
      return new ResponseEntity(HttpStatus.OK);
    } catch (Exception e) {
      e.printStackTrace();
      return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiOperation(value = "날짜별 리포트 조회하기")
  @GetMapping("/search/{date}")
  public ResponseEntity<?> searchReport(@PathVariable String date){
    try {
      List<ReportResponseDto> list = reportService.searchReport(LocalDate.parse(date));
      return new ResponseEntity<List<ReportResponseDto>>(list, HttpStatus.OK);
    } catch (Exception e) {
      e.printStackTrace();
      return ResponseEntity.badRequest().body(e.getMessage());
    }
  }
}
