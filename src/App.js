import './App.css';
import roures from "./routers"
import Layout from './component/layout';
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          {roures.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          </Route>
      </Routes>
    </div>
  );
}

export default App;
