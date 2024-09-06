import { Module } from "@nestjs/common";
import { AffirmationModuleBase } from "./base/affirmation.module.base";
import { AffirmationService } from "./affirmation.service";
import { AffirmationController } from "./affirmation.controller";
import { AffirmationResolver } from "./affirmation.resolver";

@Module({
  imports: [AffirmationModuleBase],
  controllers: [AffirmationController],
  providers: [AffirmationService, AffirmationResolver],
  exports: [AffirmationService],
})
export class AffirmationModule {}
