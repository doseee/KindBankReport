package com.kb.report.stablediffusion.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StableDiffusion422ResponseDto {
  private List<Detail> detail;

  public static class Detail {
    private List<Object> loc;
    private String msg;
    private String type;

  }
}