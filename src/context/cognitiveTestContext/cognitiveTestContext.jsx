import React from 'react';
const CognitiveTestContext = React.createContext();

function CognitiveProvider({ children }) {
  const testSchema = {
    physician: '',
    patient: '',
    idNumber: '',
    sex: '',
    age: '',
    diagnosis: '',
    cognitiveTestA: '',
    scoreA: '',
    cognitiveTestB: '',
    scoreB: '',
    ocularDisease: '',
    octModel: '',
  };

  const reducer = (state, newState) => ({ ...state, ...newState });
  const [cognitiveTest, setCognitiveTest] = React.useReducer(reducer, {});

  return (
    <CognitiveTestContext.Provider
      value={{
        cognitiveTest,
        setCognitiveTest,
      }}
    >
      {children}
    </CognitiveTestContext.Provider>
  );
}

export { CognitiveTestContext, CognitiveProvider };
