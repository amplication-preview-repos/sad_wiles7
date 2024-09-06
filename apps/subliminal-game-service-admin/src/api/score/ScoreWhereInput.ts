import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ScoreWhereInput = {
  id?: StringFilter;
  points?: IntNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
