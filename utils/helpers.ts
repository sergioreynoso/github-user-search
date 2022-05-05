interface Time {
  day: string;
  month: string;
  dayNum: string;
  year: string;
}

export const getDate = (data: Date): Time => {
  const [day, month, dayNum, year] = new Date(data).toDateString().split(" ");
  return { day, month, dayNum, year };
};
