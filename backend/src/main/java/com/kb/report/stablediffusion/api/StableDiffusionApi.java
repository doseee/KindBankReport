package com.kb.report.stablediffusion.api;

import com.kb.report.papago.api.PapagoApi;
import com.kb.report.stablediffusion.dto.StableDiffusion200ResponseDto;
import com.kb.report.stablediffusion.dto.StableDiffusion422ResponseDto;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.ClientResponse;
import org.springframework.web.reactive.function.client.ExchangeStrategies;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Duration;
import java.time.Instant;
import java.util.*;

@Component
@Slf4j
public class StableDiffusionApi {
  private final ExchangeStrategies exchangeStrategies;
  private final WebClient webClient;
  private final String STABLE_DIFFUSION_URL;
  private final int MAX_BYTE_SIZE;
  private final PapagoApi papagoApi;
  private static final Logger logger = LoggerFactory.getLogger(StableDiffusionApi.class);

  public StableDiffusionApi(
      @Value("${stable-diffusion.base-url}") String STABLE_DIFFUSION_URL,
      @Value("${stable-diffusion.max-memory-size}") int MAX_BYTE_SIZE,
      PapagoApi papagoApi) {
    this.STABLE_DIFFUSION_URL = STABLE_DIFFUSION_URL;
    this.MAX_BYTE_SIZE = MAX_BYTE_SIZE;

    this.exchangeStrategies = ExchangeStrategies.builder()
        .codecs(configurer -> configurer.defaultCodecs().maxInMemorySize(MAX_BYTE_SIZE))
        .build();

    this.webClient = WebClient.builder()
        .exchangeStrategies(exchangeStrategies)
        .build();

    this.papagoApi = papagoApi;
  }

  public Map<String, Object> getStableDiffusionUrlsAndPrompt(String title, List<String> subtitles) throws Exception {
    Instant start = Instant.now();
    Map<String, Object> StableDiffusionMap = new HashMap<>();

    StableDiffusionMap.put("prompt", "");
    StableDiffusionMap.put("steps", 20);
    StableDiffusionMap.put("sampler_index", "Euler a");
    StableDiffusionMap.put("enable_hr", false);
    StableDiffusionMap.put("denoising_strength", 0);
    StableDiffusionMap.put("firstphase_width", 0);
    StableDiffusionMap.put("firstphase_height", 0);
    StableDiffusionMap.put("hr_scale", 2);
    StableDiffusionMap.put("hr_upscaler", "");
    StableDiffusionMap.put("hr_second_pass_steps", 0);
    StableDiffusionMap.put("hr_resize_x", 0);
    StableDiffusionMap.put("hr_resize_y", 0);
    StableDiffusionMap.put("styles", new ArrayList<>());
    StableDiffusionMap.put("seed", -1);
    StableDiffusionMap.put("subseed", -1);
    StableDiffusionMap.put("subseed_strength", 0);
    StableDiffusionMap.put("seed_resize_from_h", -1);
    StableDiffusionMap.put("seed_resize_from_w", -1);
    StableDiffusionMap.put("sampler_name", "");
    StableDiffusionMap.put("batch_size", 1);
    StableDiffusionMap.put("n_iter", 1);
    StableDiffusionMap.put("cfg_scale", 7);
    StableDiffusionMap.put("width", 512);
    StableDiffusionMap.put("height", 512);
    StableDiffusionMap.put("restore_faces", false);
    StableDiffusionMap.put("tiling", false);
    StableDiffusionMap.put("do_not_save_samples", false);
    StableDiffusionMap.put("do_not_save_grid", false);
    StableDiffusionMap.put("negative_prompt", "easynegative, paintings, sketches, (worst quality:2), (low quality:2), (normal quality:2), lowres, ((monochrome)), ((grayscale)), skin spots, acnes, age spots, extra fingers, fewer fingers, strange fingers, bad hand, ((((bad anatomy)))), bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, jpeg artifacts, signature, watermark, username, sunburn, ((simple background)), hermaphrodite, long neck, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, bad proportions, malformed limbs, extra limbs, cloned face, disfigured, gross proportions, (((missing arms))), (((missing legs))), (((extra arms))), (((extra legs))), (((extra breasts))), (((extra nipples))), plump, bad legs, error legs, bad feet, kid face,(identical twins),((misaligned nails)),((misaligned fingers)),((wrinkled knees )),(uneven skin tone), ((head wear)),((bruised knee)), ((nsfw))");
    StableDiffusionMap.put("eta", 0);
    StableDiffusionMap.put("s_churn", 0);
    StableDiffusionMap.put("s_tmax", 0);
    StableDiffusionMap.put("s_tmin", 0);
    StableDiffusionMap.put("s_noise", 1);
    StableDiffusionMap.put("override_settings", new HashMap<>());
    StableDiffusionMap.put("override_settings_restore_afterwards", true);
    StableDiffusionMap.put("script_args", new ArrayList<>());
    StableDiffusionMap.put("script_name", "");
    StableDiffusionMap.put("send_images", true);
    StableDiffusionMap.put("save_images", false);
    StableDiffusionMap.put("alwayson_scripts", new HashMap<>());

    List<String> reportImagePrompt = new ArrayList<>();
    reportImagePrompt.add(papagoApi.translateKorToEng(title));

    for (String subtitle : subtitles)
      reportImagePrompt.add(papagoApi.translateKorToEng(subtitle));

    List<String> dtoImageUrl = new ArrayList<>();
    for (String translatePrompt : reportImagePrompt) {
      StableDiffusionMap.put("prompt", translatePrompt);

      ObjectMapper objectMapper = new ObjectMapper();

      int retryCount = 0;
      while (retryCount < 5) {
        ClientResponse response = webClient.post()
            .uri(STABLE_DIFFUSION_URL + "/sdapi/v1/txt2img")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(StableDiffusionMap)
            .exchange()
            .block();
        if (response.statusCode().equals(HttpStatus.OK)) {//200응답
          String responseBody = response.bodyToMono(String.class).block();
          StableDiffusion200ResponseDto response200Dto = objectMapper.readValue(responseBody, StableDiffusion200ResponseDto.class);
          String imageData = response200Dto.getImages().get(0);
          byte[] decodedImg = Base64.getDecoder().decode(imageData.getBytes("UTF-8"));
          Path destinationFile = Paths.get("image.png");
          Files.write(destinationFile, decodedImg);
          dtoImageUrl.add(imageData);
          break; //while break
        } else if (response.statusCode().equals(HttpStatus.SERVICE_UNAVAILABLE)) { // 502응답일경우 다시시도
          if (4 == retryCount) {
            throw new Exception("Stable Diffusion 이미지 생성을 5회 시도하였으나 502 SERVICE_UNAVAILABLE 에러가 났습니다.");
          } else {
            logger.warn("Stable Diffusion 이미지 생성중 502 SERVICE_UNAVAILABLE가 " + (retryCount + 1) + "회 발생하였습니다.");
            retryCount++;
            continue;
          }
        } else if (response.statusCode().equals(HttpStatus.UNPROCESSABLE_ENTITY)) { //422응답
          String responseBody = response.bodyToMono(String.class).block();
          StableDiffusion422ResponseDto response422Dto = objectMapper.readValue(responseBody, StableDiffusion422ResponseDto.class);

          logger.error("StableDiffusion 422에러가 발생했습니다: " + response422Dto);
          throw new Exception("Stable Diffusion 422 Exception");

        } else {
          logger.error("응답받은 에러코드와 메세지입니다." + response.statusCode().toString() + " " + response.statusCode().getReasonPhrase());
          logger.error("Stable Diffusion 요청 Map은 다음과 같습니다.");
          for (Map.Entry<String, Object> entry : StableDiffusionMap.entrySet()) {
            logger.error(entry.getKey() + ": " + entry.getValue());
          }
          logger.error("Stable Diffusion Exception 관련 로그를 종료하겠습니다.");
          throw new Exception("Stable Diffusion Exception");
        }
      }
    }

    Map<String, Object> ImageMap = new HashMap<>();
    ImageMap.put("stableDiffusionUrl", dtoImageUrl);
    ImageMap.put("reportImagePrompt", reportImagePrompt);

    Instant end = Instant.now();
    log.info("삽화 생성하는데 소요된 시간 : " + Duration.between(start, end).toMillis() + " ms");

    return ImageMap;
  }

  public boolean isUrlAlive() throws Exception {
    WebClient urlCheckWebClient = WebClient.create(STABLE_DIFFUSION_URL);

    Mono<ClientResponse> responseMono = urlCheckWebClient.head()
        .exchangeToMono(Mono::just);

    ClientResponse response = responseMono.block();
    return response.statusCode().is2xxSuccessful();
  }
}