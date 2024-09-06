import { SortOrder } from "../../util/SortOrder";

export type ScoreOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  points?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
