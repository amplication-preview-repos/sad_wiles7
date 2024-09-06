import * as graphql from "@nestjs/graphql";
import { ClickPatternResolverBase } from "./base/clickPattern.resolver.base";
import { ClickPattern } from "./base/ClickPattern";
import { ClickPatternService } from "./clickPattern.service";

@graphql.Resolver(() => ClickPattern)
export class ClickPatternResolver extends ClickPatternResolverBase {
  constructor(protected readonly service: ClickPatternService) {
    super(service);
  }
}
