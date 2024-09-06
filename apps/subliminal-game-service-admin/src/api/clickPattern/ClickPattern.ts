import { JsonValue } from "type-fest";

export type ClickPattern = {
  coordinates: JsonValue;
  createdAt: Date;
  id: string;
  time: Date | null;
  updatedAt: Date;
};
