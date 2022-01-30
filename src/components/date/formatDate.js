export const formatDate = dateEpoch => {
  let now;
  // prettier-ignore
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // prettier-ignore
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (dateEpoch) {
    now = new Date(dateEpoch * 1000);
  } else {
    now = new Date();
  }
  const weekday = weekdays[now.getDay()];
  const shortWeekday = weekday.slice(0, 3);
  const date = now.getDate();
  const month = months[now.getMonth()];
  const hour = String(now.getHours()).padStart(2, 0);
  const min = String(now.getMinutes()).padStart(2, 0);
  return { weekday, shortWeekday, date, month, hour, min };
};
