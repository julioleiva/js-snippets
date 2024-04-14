function toDateTimeGMT(dateTimestamp) {
  const date = new Date(dateTimestamp);
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const year = date.getUTCFullYear();
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');

  const dateString = `${day}/${month}/${year}`;
  const timeString = `${hours}:${minutes}:${seconds}`;

  return dateString.concat(' ', timeString);
}

toDateTimeGMT(1682003530423)