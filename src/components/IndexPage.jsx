import React from "react";
import { Link } from "react-router-dom";

const IndexPage = ({ transactions }) => {
  const total = transactions.reduce(
    (total, transaction) => total + parseFloat(transaction.amount),
    0
  );

  const getTotalColor = () => {
    if (total > 100) {
      return "bg-success";
    } else if (total >= 0) {
      return "bg-warning";
    } else {
      return "bg-danger";
    }
  };
  return (
    <div className="container mt-4">
      <h1>Your Fact Flow</h1>
      <h2>Transactions List</h2>
      <div className={`card text-white ${getTotalColor()}`}>
        <div className="card-body">
          <h5 className="card-title">Total</h5>
          <p>{total}</p>
        </div>
      </div>
      {transactions.length > 0 ? (
        <div className="row">
          {transactions.map((transaction) => (
            <div className="col-12 col-md-4" key={transaction.id}>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">{transaction.item_name}</h5>
                  <p className="card-title">{transaction.date}</p>
                  <p className="card-title">{transaction.category}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <Link
                      to={`/show/${transaction.id}`}
                      className="btn btn-primary"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No transactions available.</p>
      )}
    </div>
  );
};

export default IndexPage;