import { GetSummaryApiResult } from "@/types/SummaryApiResults";
import axios from "axios";
import { SUMMARY_API_URL } from "./urlUtils";

export const getAdminSummary = async () => {
  const response = await axios<GetSummaryApiResult>({
    method: "GET",
    url: SUMMARY_API_URL,
    validateStatus: () => true,
  });

  return response.data;
};
