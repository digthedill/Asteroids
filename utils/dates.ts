const formatDate = (date: Date) => {
  const month = date.getUTCMonth() + 1; //months from 1-12
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  return `${year}-${month}-${day}`;
};

const prettifyDate = (date: Date) => {
  return date.toLocaleDateString("defualt", {
    month: "long",
    day: "numeric",
    year: "2-digit",
  });
};

export { formatDate, prettifyDate };
