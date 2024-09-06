import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ClickPatternWhereInput = {
  coordinates?: JsonFilter;
  id?: StringFilter;
  time?: DateTimeNullableFilter;
};
