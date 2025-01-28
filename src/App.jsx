import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BotCollection from "./components/BotCollection";
import BotArmy from "./components/BotArmy";
import BotDetail from "./components/BotDetail";
import FilterBar from "./components/FilterBar";
import SortBar from "./components/SortBar";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const addToArmy = (bot) => {
    if (!army.includes(bot)) setArmy([...army, bot]);
  };

  const removeFromArmy = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const handleDelete = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, { method: "DELETE" })
      .then(() => setBots(bots.filter((b) => b.id !== bot.id)));
  };

  const handleSort = (criteria) => {
    const sortedBots = [...bots].sort((a, b) => b[criteria] - a[criteria]);
    setBots(sortedBots);
  };

  const handleFilter = (botClass) => {
    if (botClass === "All") {
      fetch("http://localhost:8001/bots")
        .then((response) => response.json())
        .then((data) => setBots(data));
    } else {
      setBots(bots.filter((bot) => bot.bot_class === botClass));
    }
  };

  return (
    <Router>
      <div>
        <h1>Bot Battlr</h1>
        <FilterBar onFilter={handleFilter} />
        <SortBar onSort={handleSort} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <BotArmy bots={army} removeFromArmy={removeFromArmy} />
                <BotCollection
                  bots={bots}
                  addToArmy={addToArmy}
                  deleteBot={handleDelete}
                />
              </>
            }
          />
          <Route path="/bot/:id" element={<BotDetail bots={bots} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
