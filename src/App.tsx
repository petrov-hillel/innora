import React from 'react';
import {Routes, Route} from "react-router-dom";
import ActionsList from "./components/ActionsList";
import ActionPage from "./components/ActionPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ActionsList />} />
        <Route path="/action/:id" element={<ActionPage />} />
      </Routes>
    </>
  );
}

export default App;
