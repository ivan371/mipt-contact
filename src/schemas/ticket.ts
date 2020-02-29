import { normalize, schema } from "normalizr";

import { commentSchema } from "./comment";

const ticketSchema = new schema.Entity("ticket", { comments: [commentSchema] });

export function ticketsNormalize(tickets: ITicket[]) {
  return normalize(tickets, [ticketSchema]);
}

export function ticketNormalize(tickets: ITicket) {
  return normalize(tickets, ticketSchema);
}
