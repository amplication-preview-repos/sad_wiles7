import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AffirmationService } from "./affirmation.service";
import { AffirmationControllerBase } from "./base/affirmation.controller.base";

@swagger.ApiTags("affirmations")
@common.Controller("affirmations")
export class AffirmationController extends AffirmationControllerBase {
  constructor(protected readonly service: AffirmationService) {
    super(service);
  }
}
