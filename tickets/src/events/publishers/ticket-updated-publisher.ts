import { Publisher, Subjects, TicketUpdatedEvent } from "@abctickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
