import dayjs from "dayjs"

export const convertToDateString = (date: Date) => {
    const formatedDate = `${date.getFullYear().toString()}-${date.getMonth().toString()}-${date.getDate().toString()}`;
    return dayjs(formatedDate).format('MMMM DD, YYYY').toString();
}