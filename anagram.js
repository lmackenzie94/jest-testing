const isAnagram = (str1, str2) => formatStr(str1) === formatStr(str2);

// helper function
const formatStr = str =>
  str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");

module.exports = isAnagram;
