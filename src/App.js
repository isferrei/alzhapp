import React from "react";
import { Container } from "@material-ui/core";
import { CognitiveProvider } from "./context/cognitiveTestContext/cognitiveTestContext";
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
        <BrowserRouter>
          <Navbar />
          <Route path="/" component={Home} />
          <Route path="/oct_data" component={OctData} />
          <Route path="/results" component={Results} />
          <Route path="/cognitive_test" component={CognitiveTest} />
          <Footer />
        </BrowserRouter>
      </CognitiveProvider>
    </>
  );
}

export default App;
