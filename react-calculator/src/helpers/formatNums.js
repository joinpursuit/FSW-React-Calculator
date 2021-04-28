const formatNums = (value) => {
  let output = "";
  value.includes(",") ? (output = value.replace(/,/g, "")) : (output = value);
  return Number(output).toLocaleString();
};

export default formatNums;
