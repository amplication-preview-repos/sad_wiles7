import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClickPatternServiceBase } from "./base/clickPattern.service.base";

@Injectable()
export class ClickPatternService extends ClickPatternServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
