# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# code-challenge

**Bot Battlr**
Welcome to Bot Battlr, the ultimate app for creating and managing your own bot army! This project was built using React to practice working with components, props, state management, client-side routing, and data fetching.

**Overview**
Bot Battlr allows users to browse through a variety of bots, add them to their personal army, and manage their roster. Each bot comes with unique attributes such as health, damage, armor, and a class. Users can sort and filter bots, and even remove or permanently delete them from the system.

**Features**

***Core Functionality***
- View All Bots: Displays a list of bots with their details.
- Enlist Bots: Add a bot to your army (one instance of each bot).
- Release Bots: Remove a bot from your army without deleting it.
- Delete Bots: Permanently remove a bot from the database.

***Advanced Features***
- Filter bots by class (e.g., Support, Medic, Assault, Defender, Witch, Captain).
- Sort bots based on health, damage, or armor.
- Single-page application with client-side routing for seamless navigation.

**Installation**
To run the project locally, follow these steps:

***Prerequisites***
Node.js and npm installed.
json-server installed globally:
npm install -g json-server

***Steps***
1. Clone the repository:
git clone https://github.com/yourusername/bot-battlr.git
cd bot-battlr
2. Install project dependencies:
npm install
3. Start the backend server:
json-server --watch db.json --port 8001
4. Start the React development server:
npm run dev
5. Open your browser and navigate to http://localhost:5173.

**Usage**
1. Browse Bots: View all bots available in the system.
2. Enlist Bots: Click the "Enlist" button to add a bot to your army.
3. Manage Your Army: Release or delete bots from your army as needed.
4. Filter and Sort: Use the filter bar to view bots by class, or sort them by attributes.

**Technologies Used**

***Frontend***
- React (with Vite for development)
- JavaScript
- CSS for styling

***Backend***
- json-server (mock REST API for data management)

**Future Enhancements**
- Implement persistent user accounts with authentication.
- Add a bot creation feature for users to design their own bots.
- Enhance UI/UX with animations and better responsiveness.
- Expand bot attributes for more strategic army-building.
