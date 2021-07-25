import React from 'react';

export const CognitiveTestContext = React.createContext();

export const CognitiveProvider = ({ children }) => {
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
  const [cognitiveTest, setCognitiveTest] = React.useReducer(
    reducer,
    testSchema
  );

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

