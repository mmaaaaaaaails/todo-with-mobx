import React from 'react';
import './App.css';
import { motion } from "framer-motion";
import TodoDetails from "./TodoDetails";

function App() {
  return (
    <div className="App">
        <motion.h1
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
        >
            Todo App
        </motion.h1>
        <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 1 }}
        >
            <TodoDetails />
        </motion.div>
    </div>
  );
}

export default App;
