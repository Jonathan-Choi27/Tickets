import { Ticket } from "../ticket";

it("implements optimistic concurrency control", async () => {
  const ticket = Ticket.build({
    title: "disco",
    price: 10,
    userId: "123",
  });

  await ticket.save();

  const firstInstance = await Ticket.findById(ticket.id);
  const secondInstance = await Ticket.findById(ticket.id);

  firstInstance!.set({ price: 5 });
  secondInstance!.set({ price: 15 });

  await firstInstance!.save();

  expect.assertions(1);
  try {
    await secondInstance!.save();
  } catch (err) {
    expect(err).toBeDefined();
  }
});

it("increments the version number on multiple saves", async () => {
  const ticket = Ticket.build({
    title: "disco",
    price: 20,
    userId: "123",
  });

  await ticket.save();
  expect(ticket.version).toEqual(0);
  await ticket.save();
  expect(ticket.version).toEqual(1);
  await ticket.save();
  expect(ticket.version).toEqual(2);
});
