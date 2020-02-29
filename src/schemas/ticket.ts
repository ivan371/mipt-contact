import { normalize, schema } from "normalizr";

const ticketSchema = new schema.Entity("ticket");

export function ticketsNormalize(tickets: ITicket[]) {
  return normalize(tickets, [ticketSchema]);
}

export function tickettNormalize(tickets: ITicket) {
  return normalize(tickets, ticketSchema);
}
