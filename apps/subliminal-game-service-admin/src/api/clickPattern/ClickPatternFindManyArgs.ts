import { ClickPatternWhereInput } from "./ClickPatternWhereInput";
import { ClickPatternOrderByInput } from "./ClickPatternOrderByInput";

export type ClickPatternFindManyArgs = {
  where?: ClickPatternWhereInput;
  orderBy?: Array<ClickPatternOrderByInput>;
  skip?: number;
  take?: number;
};
