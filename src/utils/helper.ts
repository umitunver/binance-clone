function abbreviateNumber(number: number) {
  if (isNaN(number)) return number;

  if (number < 1e3) {
    return String(number);
  } else if (number >= 1e3 && number < 1e6) {
    return (number / 1e3).toFixed(1) + 'k';
  } else if (number >= 1e6 && number < 1e9) {
    return (number / 1e6).toFixed(1) + 'M';
  } else if (number >= 1e9 && number < 1e12) {
    return (number / 1e9).toFixed(1) + 'B';
  } else {
    return number;
  }
}

function wordSlice(value: string, limit: number) {
  if (value?.length <= limit) {
    return value
  }
  return value?.slice(0, limit) + "..."
}
export { abbreviateNumber, wordSlice }