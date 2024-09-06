import { Module } from "@nestjs/common";
import { ClickPatternModuleBase } from "./base/clickPattern.module.base";
import { ClickPatternService } from "./clickPattern.service";
import { ClickPatternController } from "./clickPattern.controller";
import { ClickPatternResolver } from "./clickPattern.resolver";

@Module({
  imports: [ClickPatternModuleBase],
  controllers: [ClickPatternController],
  providers: [ClickPatternService, ClickPatternResolver],
  exports: [ClickPatternService],
})
export class ClickPatternModule {}
