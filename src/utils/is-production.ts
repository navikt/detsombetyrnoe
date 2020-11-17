const isProduction = () => {
  if (typeof window !== "undefined") {
    const url = window && window.location && window.location.href ? window.location.href : "";
    return /detsombetyrnoe.no/.test(url);
  } else {
    return false;
  }
};

export default isProduction;
