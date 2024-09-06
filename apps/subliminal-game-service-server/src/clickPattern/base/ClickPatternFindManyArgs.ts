/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ClickPatternWhereInput } from "./ClickPatternWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ClickPatternOrderByInput } from "./ClickPatternOrderByInput";

@ArgsType()
class ClickPatternFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ClickPatternWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ClickPatternWhereInput, { nullable: true })
  @Type(() => ClickPatternWhereInput)
  where?: ClickPatternWhereInput;

  @ApiProperty({
    required: false,
    type: [ClickPatternOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ClickPatternOrderByInput], { nullable: true })
  @Type(() => ClickPatternOrderByInput)
  orderBy?: Array<ClickPatternOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ClickPatternFindManyArgs as ClickPatternFindManyArgs };
