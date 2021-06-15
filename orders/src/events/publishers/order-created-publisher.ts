import { Publisher, OrderCreatedEvent, Subjects } from "@abctickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
