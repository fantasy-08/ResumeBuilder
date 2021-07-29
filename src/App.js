import React, { useReducer, createContext } from "react";
import { Route, Switch } from "react-router-dom";
//context reducers
import { stepsReducer } from "./reducer/steps";
import { resumeReducer } from "./reducer/resume";
//Constant
import { initialSteps, initialMetaData } from "./reducer/constants";
//route DOM
import BuildResume from "./pages/Page/BuildReume";
import Template from "./pages/Page/Template";
import Landing from "./pages/Page/Landing";

import MNITresumePrint from "./pages/templates/MNITresumePrint";
//navbar
import Navbar from "./components/navbar/Navbar";

// created a context
export const StepsContext = createContext();
export const MetaDataContext = createContext();

function App() {
  const [stepsState, stepsDispatch] = useReducer(stepsReducer, initialSteps);
  const [resumeState, resumeDispatch] = useReducer(
    resumeReducer,
    initialMetaData
  );
  return (
    <StepsContext.Provider value={{ stepsState, stepsDispatch }}>
      <MetaDataContext.Provider value={{ resumeState, resumeDispatch }}>
        <Switch>
          <Route exact path="/ResumeBuilder">
            <Navbar />
            <Landing />
          </Route>
          <Route exact path="/build">
            <Navbar />
            <BuildResume />
          </Route>
          <Route exact path="/template">
            <Navbar />
            <Template />
          </Route>
          <Route exact path="/print/mnit">
            <MNITresumePrint />
          </Route>
          <Route path="/">
            <Navbar />
            <Landing />
          </Route>
        </Switch>
      </MetaDataContext.Provider>
    </StepsContext.Provider>
  );
}

export default App;
