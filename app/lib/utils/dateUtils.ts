import { format } from "date-fns";

/**
 * Format friendly date
 * @param date
 * @returns {string}
 */
export const formatFriendyDate = (date: string) => {
  return format(new Date(date), "dd MMMM yyyy");
};
