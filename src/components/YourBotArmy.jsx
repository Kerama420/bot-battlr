import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, releaseBot, deleteBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-list">
        {army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            actionLabel="Release"
            onAction={() => releaseBot(bot)}
            onDelete={() => deleteBot(bot)}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
