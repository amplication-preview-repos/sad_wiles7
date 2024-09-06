import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClickPatternService } from "./clickPattern.service";
import { ClickPatternControllerBase } from "./base/clickPattern.controller.base";

@swagger.ApiTags("clickPatterns")
@common.Controller("clickPatterns")
export class ClickPatternController extends ClickPatternControllerBase {
  constructor(protected readonly service: ClickPatternService) {
    super(service);
  }
}
