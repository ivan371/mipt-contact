import { statuses } from "./constants";

export function getStatusActionText(status: IStatus) {
  switch (status) {
    case "OPEN":
      return statuses.IN_PROGRESS;
    case "IN_PROGRESS":
      return statuses.RESOLVE;
    case "RESOLVE":
      return statuses.CLOSED;
  }
}

export function getStatusAction(status: IStatus) {
  switch (status) {
    case "OPEN":
      return "IN_PROGRESS";
    case "IN_PROGRESS":
      return "RESOLVE";
    case "RESOLVE":
      return "CLOSED";
  }
}
