export const truncateText = (input: string) => {
  if (input.length > 5) {
    return input.substring(0, 5) + "...";
  }
  return input;
};
