const OrderIndex = ({ orders }) => {
  const orderList = orders.map((order) => {
    return (
      <tr key={order.id}>
        <td>{order.ticket.title}</td>
        <td>{order.status}</td>
      </tr>
    );
  });

  return (
    <div>
      <h1>My Orders</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{orderList}</tbody>
      </table>
    </div>
  );
};

OrderIndex.getInitialProps = async (client) => {
  const { data } = await client.get("/api/orders");

  return { orders: data };
};

export default OrderIndex;
