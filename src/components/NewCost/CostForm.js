import React, { useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     name: "",
  //     amount: "",
  //     date: "",
  //   });

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   name: event.target.value,
    // });
    // setUserInput((perviousState) => {
    //   return {
    //     ...perviousState,
    //     name: event.target.value,
    //   };
    // });
  };
  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveCostData(costData);
    setInputName("");
    setInputAmount("");
    setInputDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__control">
        <div className="new-cost__control">
          <label>Название</label>
          <input
            type="text"
            value={inputName}
            onChange={nameChangeHandler}
          ></input>
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            value={inputAmount}
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          ></input>
          <div className="new-cost__control">
            <label>Дата</label>
            <input
              value={inputDate}
              onChange={dateChangeHandler}
              type="date"
              min="2019-01-01"
              step="2025-12-31"
            ></input>
          </div>
          <div className="new-cost_actions">
            <button type="submit">Добавить Расход</button>
            <button type="button" onClick={props.onCancel}>
              Отмена
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
