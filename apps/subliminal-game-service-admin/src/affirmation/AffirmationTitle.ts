import { Affirmation as TAffirmation } from "../api/affirmation/Affirmation";

export const AFFIRMATION_TITLE_FIELD = "text";

export const AffirmationTitle = (record: TAffirmation): string => {
  return record.text?.toString() || String(record.id);
};
