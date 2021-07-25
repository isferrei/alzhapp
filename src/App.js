import React from "react";
import { CognitiveProvider } from "./context/cognitiveTestContext";
import { OctProvider } from "./context/octDataContext";
import { Route, BrowserRouter } from "react-router-dom";
import {
  CognitiveTest,
  OctData,
  Results,
  Navbar,
  Home,
  Footer,
} from "./components";
import "./App.css";

function App({ history }) {
  return (
    <>
      <CognitiveProvider>
        <OctProvider>
          <BrowserRouter>
            <Navbar />
            <Route path="/" component={Home} />
            <Route path="/oct_data" component={OctData} />
            <Route path="/results" component={Results} />
            <Route path="/cognitive_test" component={CognitiveTest} />
            <Footer />
          </BrowserRouter>
        </OctProvider>
      </CognitiveProvider>
    </>
  );
}

export default App;
