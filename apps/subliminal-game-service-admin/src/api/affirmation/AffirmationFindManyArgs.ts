import { AffirmationWhereInput } from "./AffirmationWhereInput";
import { AffirmationOrderByInput } from "./AffirmationOrderByInput";

export type AffirmationFindManyArgs = {
  where?: AffirmationWhereInput;
  orderBy?: Array<AffirmationOrderByInput>;
  skip?: number;
  take?: number;
};
