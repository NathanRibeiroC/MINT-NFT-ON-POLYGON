import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import "./App.scss";
import TestPage from "./pages/Home/TestPage";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="" element={<TestPage />} />
      <Route path="/h" element={<HomePage />} />
    </Routes>
  );
}

export default App;
