import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AffirmationWhereInput = {
  id?: StringFilter;
  image?: JsonFilter;
  text?: StringNullableFilter;
};
