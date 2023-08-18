package com.kb.report.bookmark.controller;

import com.kb.report.bookmark.service.BookmarkService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api("Bookmark Controller")
@RequiredArgsConstructor
@RequestMapping("/bookmark")
@RestController
public class BookmarkController {

  private final BookmarkService bookmarkService;

  @ApiOperation(value = "북마크 설정")
  @PostMapping("save/{memberId}/{reportId}")
  public ResponseEntity<?> saveBookmark(@PathVariable String memberId, @PathVariable int reportId) {
    try {
      bookmarkService.saveBookmark(memberId, reportId);
      return new ResponseEntity<>(HttpStatus.OK);
    } catch (Exception e) {
      e.printStackTrace();
      return ResponseEntity.badRequest().body(e.getMessage());
    }
  }

  @ApiOperation(value = "북마크 조회")
  @GetMapping("search/{memberId}")
  public ResponseEntity<?> saveBookmark(@PathVariable String memberId) {
    try {
      List<String> list = bookmarkService.searchBookmark(memberId);
      return new ResponseEntity<List<String>>(list, HttpStatus.OK);
    } catch (Exception e) {
      e.printStackTrace();
      return ResponseEntity.badRequest().body(e.getMessage());
    }
  }
}
