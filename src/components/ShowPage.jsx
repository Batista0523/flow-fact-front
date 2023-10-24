import React from "react";
import { Link, useParams } from "react-router-dom";

const ShowPage = ({ transactions, onDeleteTransaction }) => {
  const { id } = useParams();
  const transaction = transactions.find((t) => t.id.toString() === id);

  if (!transaction) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">Transaction not found.</div>
        <Link to="/index" className="btn btn-primary">
          Back to Index
        </Link>
      </div>
    );
  }
  const handleDelete = (id) => {
    onDeleteTransaction(id);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Transaction Details</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Item Name: {transaction.item_name}</h5>
          <p className="card-text">Date: {transaction.date}</p>
          <p className="card-text">Category: {transaction.category}</p>
          <p className="card-text">From: {transaction.from}</p>
          <p className="card-text">Amount : {transaction.amount}</p>
          <p className="card-text">
            Type: {transaction.income ? "Income" : "Expense"}
          </p>
          <div className="btn-group">
            <Link to={`/edit-form/${transaction.id}`}>
              <button className="btn btn-warning mr-2">Edit</button>
            </Link>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(transaction.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <Link to="/index" className="btn btn-primary mt-3">
        Back to Index
      </Link>
    </div>
  );
};

export default ShowPage;