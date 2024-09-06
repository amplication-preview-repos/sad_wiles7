import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AffirmationServiceBase } from "./base/affirmation.service.base";

@Injectable()
export class AffirmationService extends AffirmationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
