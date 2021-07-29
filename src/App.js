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
        <Navbar />
        <Switch>
          <Route exact path="/ResumeBuilder">
            <Landing />
          </Route>
          <Route exact path="/build">
            <BuildResume />
          </Route>
          <Route exact path="/template">
            <Template />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </MetaDataContext.Provider>
    </StepsContext.Provider>
  );
}

export default App;
