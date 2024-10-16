export function getTimeDifference(futureTime: number, tTime: number) {
  return futureTime - tTime;
}

export function isPast(dateStr: string) {
  const today = new Date().getTime();
  const tDay = new Date(dateStr).getTime();
  return getTimeDifference(today, tDay) > 0;
}

export function formatDateString(dateString: string) {
  // Create a new Date object from the date string
  const date = new Date(dateString);

  // Format the date using toLocaleDateString with the desired options
  return date.toLocaleDateString("en-US", { weekday: "short", day: "numeric" });
}
