import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /*
  use one State instead to be more manageable and alternate way
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  We can stick to use multiple state approach instead of using one state, because one state
  is only the alternative way to fetch what user entered at the input element.
  */

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    /*
    setUserInput({
        ...userInput,
        enteredTitle: event.target.value
    })

    use code above, we spread the initial value and use the previous state
    BUT REACT DOES NOT GUARANTEE we will get the previous state,
    because we are not return and execute any function.
    Why we spread the value?
    because we don't want to lost the other values when our code being execute and evaluated
    ----------------
    setUserInput((prevState) => {
        return { ...prevState, enteredTitle: event.target.value };
    });

    code above is the safest ways to get lastest snapshot and REACT WILL ENSURE
    we will work and get the lastest snapshot. So, we use should always use that code above
    whenever we work on our state update depends on the previous state
    */
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>{enteredTitle}</label>
          <input type="text" onChange={titleChangeHandler} autoFocus />
        </div>
        <div className="new-expense__control">
          <label>{enteredAmount}</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>{enteredDate}</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
