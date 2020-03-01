import moment from "moment-with-locales-es6";

export function formatTime(time: string) {
  moment.locale("ru");

  return moment(new Date(time))
    .format("LLL")
    .replace(new RegExp("[^.]?" + moment().format("YYYY") + " г.?"), "");
}
