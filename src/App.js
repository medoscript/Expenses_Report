import React, { useState } from "react";
import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";
const Initial_Costs = [
  {
    id: "c1",
    date: new Date(2024, 2, 12),
    description: "Holodilnik",
    amount: 999.99,
  },
  {
    id: "c2",
    date: new Date(2024, 2, 12),
    description: "macbook",
    amount: 1999.99,
  },
  {
    id: "c3",
    date: new Date(2024, 2, 12),
    description: "pantaloni",
    amount: 49.99,
  },
];

const App = () => {
  const [costs, setCosts] = useState(Initial_Costs);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };
  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
