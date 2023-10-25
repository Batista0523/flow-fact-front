import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditPage = ({ transactions, onUpdateTransaction, history }) => {
  const { id } = useParams();
  const transactionToEdit = transactions.find(
    (transaction) => transaction.id === id
  );

  if (!transactionToEdit) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">Transaction not found.</div>
        <Link to="/" className="btn btn-primary">
          Back to Index
        </Link>
      </div>
    );
  }

  const [editedTransaction, setEditedTransaction] = useState({
    id: id,
    item_name: transactionToEdit.item_name,
    amount: transactionToEdit.amount,
    date: transactionToEdit.date,
    from: transactionToEdit.from,
    income: transactionToEdit.income,
    category: transactionToEdit.category,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTransaction({ ...editedTransaction, [name]: value });
  };

  const handleUpdate = () => {
    onUpdateTransaction(id, editedTransaction);

    setEditedTransaction({
      id: id,
      item_name: "",
      amount: 0,
      date: "",
      from: "",
      category: "",
      income: false,
    });

    history.push(`/show/${id}`);
  };

  return (
    <div className="container mt-4 border p-4">
      <h1>Edit Transaction</h1>
      <form onSubmit={handleUpdate}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="item_name" className="form-label">
                New Item Name:
                <input
                  type="text"
                  className="form-control"
                  id="item_name"
                  name="item_name"
                  value={editedTransaction.item_name}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">
                New Amount:
                <input
                  type="number"
                  className="form-control"
                  id="amount"
                  name="amount"
                  value={editedTransaction.amount}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                New Date:
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  name="date"
                  value={editedTransaction.date}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="from" className="form-label">
                New From:
                <input
                  type="text"
                  className="form-control"
                  id="from"
                  name="from"
                  value={editedTransaction.from}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                New Category:
                <input
                  type="text"
                  className="form-control"
                  id="category"
                  name="category"
                  value={editedTransaction.category}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="income"
                  checked={editedTransaction.income}
                  onChange={(e) => handleInputChange(e)}
                />
                <label htmlFor="income" className="form-check-label">
                  Income
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2"></div>
        <Link to="/index">
          <button
            onClick={handleUpdate}
            type="submit"
            className="btn btn-primary"
          >
            Update Transaction
          </button>
        </Link>
      </form>
    </div>
  );
};

export default EditPage;
