import { GetSummaryApiResult } from "@/types/SummaryApiResults";
import axios from "axios";
import { SUMMARY_API_URL } from "./urlUtils";
import User from '@/types/User';

export const getAdminSummary = async (user: User) => {
  const response = await axios<GetSummaryApiResult>({
    method: "GET",
    url: SUMMARY_API_URL,
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
    validateStatus: () => true,
  });

  return response.data;
};
