import * as graphql from "@nestjs/graphql";
import { AffirmationResolverBase } from "./base/affirmation.resolver.base";
import { Affirmation } from "./base/Affirmation";
import { AffirmationService } from "./affirmation.service";

@graphql.Resolver(() => Affirmation)
export class AffirmationResolver extends AffirmationResolverBase {
  constructor(protected readonly service: AffirmationService) {
    super(service);
  }
}
