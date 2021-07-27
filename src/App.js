import React, { useReducer, createContext, useState } from "react";
import { stepsReducer } from "./reducer/steps";
import { resumeReducer } from "./reducer/resume";
import { initialSteps,initialMetaData } from "./reducer/constants"
//Components
import Navigation from './components/steps/Navigation'
//Pages
import PageController from './pages/PagesController'
// created a context
export const StepsContext = createContext();
export const MetaDataContext = createContext();

function App() {
  const [stepsState, stepsDispatch] = useReducer(stepsReducer, initialSteps);
  const [resumeState, resumeDispatch] = useReducer(resumeReducer, initialMetaData);
  return (
    <StepsContext.Provider value={{ stepsState, stepsDispatch }}>
      <MetaDataContext.Provider value={{ resumeState, resumeDispatch }}>
        <Navigation />
        <br />
          <PageController />
      </MetaDataContext.Provider>
    </StepsContext.Provider>
  );
}

export default App;
