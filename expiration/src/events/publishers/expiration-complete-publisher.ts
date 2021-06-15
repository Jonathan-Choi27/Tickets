import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@abctickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
