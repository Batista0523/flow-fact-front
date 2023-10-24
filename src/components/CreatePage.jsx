import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const CreatePage = ({ createTransaction, updateTotals }) => {
  const [itemName, setItemName] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [from, setFrom] = useState("");
  const [amount, setAmount] = useState("");
  const [income, setIncome] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      item_name: itemName,
      date,
      category,
      from,
      amount: parseFloat(amount),
      income,
    };

    createTransaction(newTransaction);
    updateTotals(newTransaction);

    setItemName("");
    setDate("");
    setCategory("");
    setFrom("");
    setAmount("");
    setIncome(false);
  };
  const reset = () => {
    setItemName("");
    setDate("");
    setCategory("");
    setFrom("");
    setAmount("");
    setIncome(false);
  };
  return (
    <div className="container mt-4 border p-4">
      <h1>Your Fact Flow</h1>
      <p>Create a New Resource</p>
      <form onSubmit={handleFormSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="itemName" className="form-label">
                Item Name:
                <input
                  type="text"
                  className="form-control"
                  id="itemName"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                />
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">
                Amount:
                <input
                  type="number"
                  className="form-control"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                Date:
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  style={{ width: "200px" }}
                />
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category:
                <input
                  type="text"
                  className="form-control"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="from" className="form-label">
                From:
                <input
                  type="text"
                  className="form-control"
                  id="from"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
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
                  checked={income}
                  onChange={(e) => setIncome(e.target.checked)}
                />
                <label htmlFor="income" className="form-check-label">
                  Income
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <button onClick={reset} type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <div className="col-md-6">
            <Link to="/index" className="btn btn-primary">
              Back to Index
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePage;
