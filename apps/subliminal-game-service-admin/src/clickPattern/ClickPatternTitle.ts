import { ClickPattern as TClickPattern } from "../api/clickPattern/ClickPattern";

export const CLICKPATTERN_TITLE_FIELD = "id";

export const ClickPatternTitle = (record: TClickPattern): string => {
  return record.id?.toString() || String(record.id);
};
