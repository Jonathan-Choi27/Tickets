import { Publisher, Subjects, TicketCreatedEvent } from "@abctickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
