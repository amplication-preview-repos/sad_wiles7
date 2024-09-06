/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ClickPatternWhereInput } from "./ClickPatternWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ClickPatternListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ClickPatternWhereInput,
  })
  @ValidateNested()
  @Type(() => ClickPatternWhereInput)
  @IsOptional()
  @Field(() => ClickPatternWhereInput, {
    nullable: true,
  })
  every?: ClickPatternWhereInput;

  @ApiProperty({
    required: false,
    type: () => ClickPatternWhereInput,
  })
  @ValidateNested()
  @Type(() => ClickPatternWhereInput)
  @IsOptional()
  @Field(() => ClickPatternWhereInput, {
    nullable: true,
  })
  some?: ClickPatternWhereInput;

  @ApiProperty({
    required: false,
    type: () => ClickPatternWhereInput,
  })
  @ValidateNested()
  @Type(() => ClickPatternWhereInput)
  @IsOptional()
  @Field(() => ClickPatternWhereInput, {
    nullable: true,
  })
  none?: ClickPatternWhereInput;
}
export { ClickPatternListRelationFilter as ClickPatternListRelationFilter };
