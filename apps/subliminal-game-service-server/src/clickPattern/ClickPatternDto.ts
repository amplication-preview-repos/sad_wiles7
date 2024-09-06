import { ArgsType, Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";
import { Type } from "class-transformer";

@ArgsType()
class ClickPatternDto {
    @Field(() => GraphQLJSON)
    coordinates!: InputJsonValue;

    @Field(() => Date)
    @Type(() => Date)
    timestamp!: Date;
}

export { ClickPatternDto as ClickPatternDto };