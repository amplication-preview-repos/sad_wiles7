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
import { AffirmationWhereInput } from "./AffirmationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AffirmationOrderByInput } from "./AffirmationOrderByInput";

@ArgsType()
class AffirmationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AffirmationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AffirmationWhereInput, { nullable: true })
  @Type(() => AffirmationWhereInput)
  where?: AffirmationWhereInput;

  @ApiProperty({
    required: false,
    type: [AffirmationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AffirmationOrderByInput], { nullable: true })
  @Type(() => AffirmationOrderByInput)
  orderBy?: Array<AffirmationOrderByInput>;

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

export { AffirmationFindManyArgs as AffirmationFindManyArgs };