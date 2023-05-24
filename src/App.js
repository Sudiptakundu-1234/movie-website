import "./App.css";
import Home from "./Home";
import Error from "./Error";
import MovieShow from "./MovieShow";
import {MainProvider} from './MainContext'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Movie Website</h1>
      <MainProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies/:id" element={<MovieShow />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </MainProvider>
    </div>
  );
}

export default App;
