import React from "react";

export const OctDataContext = React.createContext();

export const OctProvider = ({ children }) => {
  const octDataInitialState = {
    peripapillary: {
      od: "",
      os: "",
    },
    macular_thickness: {
      od: "",
      os: "",
    },
    macular_volume: {
      od: "",
      os: "",
    },
    gcl_ipl: {
      od: "",
      os: "",
    },
    gcl_ipl_rnfl: {
      od: "",
      os: "",
    },
  };

  const reducer = (state, newState) => ({ ...state, ...newState });
  const [octData, setOctData] = React.useReducer(reducer, octDataInitialState);

  return (
    <OctDataContext.Provider
      value={{
        octData,
        setOctData,
      }}
    >
      {children}
    </OctDataContext.Provider>
  );
};
