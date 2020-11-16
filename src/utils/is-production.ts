export default () => {
  if (typeof window !== "undefined") {
    const url = window && window.location && window.location.href ? window.location.href : "";
    return /detsombetyrmoe.no/.test(url);
  } else {
    return false;
  }
};
