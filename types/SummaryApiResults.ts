import Summary from "./Summary";

export interface GetSummaryApiResult {
  message?: string;
  data?: Summary;
  error?: string;
}
