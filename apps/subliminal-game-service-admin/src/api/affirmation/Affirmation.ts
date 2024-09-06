import { JsonValue } from "type-fest";

export type Affirmation = {
  createdAt: Date;
  id: string;
  image: JsonValue;
  text: string | null;
  updatedAt: Date;
};
