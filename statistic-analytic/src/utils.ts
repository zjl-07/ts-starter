export const dateStringToDate = (dateString: string): Date => {
  const [day, month, year] = dateString.split("/").map((val) => parseInt(val));
  return new Date(day, month, year);
};
