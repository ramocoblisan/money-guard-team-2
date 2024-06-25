
const addLeadingZero = number => {
    return number < 10 ? '0' + number : number;
};
  
  export const formatDate = (date)=>{
  const year = date?.getFullYear();
  const month = addLeadingZero(date?.getMonth() + 1);
  const day = addLeadingZero(date?.getDate());
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate
  }