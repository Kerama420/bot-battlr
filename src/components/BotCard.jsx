import React from "react";

function BotCard({ bot, actionLabel, onAction, onDelete }) {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>
        <strong>Class:</strong> {bot.bot_class}
      </p>
      <p>
        <strong>Health:</strong> {bot.health}
      </p>
      <p>
        <strong>Damage:</strong> {bot.damage}
      </p>
      <p>
        <strong>Armor:</strong> {bot.armor}
      </p>
      <button onClick={onAction}>{actionLabel}</button>
      <button className="delete" onClick={onDelete}>
        X
      </button>
    </div>
  );
}

export default BotCard;
