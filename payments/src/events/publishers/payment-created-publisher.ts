import { Subjects, Publisher, PaymentCreatedEvent } from "@abctickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
