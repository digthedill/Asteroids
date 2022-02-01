import moment from "moment";

const today = new Date();

const formatDate = (date: Date) => {
  const month = date.getUTCMonth() + 1; //months from 1-12
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  return `${year}-${month}-${day}`;
};

const prettifyDate = (date: Date) => {
  return moment(date).format("LL");
};

export { today, formatDate, prettifyDate };
