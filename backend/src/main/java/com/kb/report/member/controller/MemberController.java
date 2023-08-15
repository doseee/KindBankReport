package com.kb.report.member.controller;

import com.kb.report.member.dto.MemberRequestDto;
import com.kb.report.member.service.MemberService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api("Member Controller")
@RequiredArgsConstructor
@RequestMapping("/member")
@RestController
public class MemberController {

  private final MemberService memberService;

  @ApiOperation(value = "회원가입")
  @PostMapping("/signup")
  public ResponseEntity<?> signUp(@RequestBody MemberRequestDto dto) {
    try {
      memberService.saveMember(dto);
      return new ResponseEntity<>(HttpStatus.OK);
    } catch (Exception e) {
      e.printStackTrace();
      return ResponseEntity.badRequest().body(e.getMessage());
    }
  }

  @ApiOperation(value = "로그인")
  @PostMapping("/signin")
  public ResponseEntity<?> signIn(@RequestBody MemberRequestDto dto) {
    try {
      String id = memberService.loginMember(dto);
      return new ResponseEntity<String>(id, HttpStatus.OK);
    } catch (Exception e) {
      e.printStackTrace();
      return ResponseEntity.badRequest().body(e.getMessage());
    }
  }
}