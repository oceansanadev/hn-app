import { formatDistanceToNow } from "date-fns";

export const calculateTimeAgo = (time) => {
  const date = new Date(time * 1000);
  return formatDistanceToNow(date);
};
