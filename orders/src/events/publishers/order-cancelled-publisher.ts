import { Subjects, Publisher, OrderCancelledEvent } from "@abctickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
