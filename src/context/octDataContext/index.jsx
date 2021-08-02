import React from 'react';

export const OctDataContext = React.createContext();

export const OctProvider = ({ children }) => {
  const octDataInitialState = {
    peripapillary: {
      od: '',
      os: '',
    },
    macular_thickness: {
      od: '',
      os: '',
    },
    macular_volume: {
      od: '',
      os: '',
    },
    gcl_ipl: {
      od: '',
      os: '',
    },
    gcl_ipl_rnfl: {
      od: '',
      os: '',
    },
  };

  const reducer = (state, newState) => ({ ...state, ...newState });
  const [octData, setOctData] = React.useReducer(reducer, octDataInitialState);
  const [peripOsPerc, setPeripOsPerc] = React.useReducer(reducer);
  const [peripOdPerc, setPeripOdPerc] = React.useReducer(reducer);
  const [totalMacularOdPerc, setTotalMacularOdPerc] = React.useReducer(reducer);
  const [totalMacularOsPerc, setTotalMacularOsPerc] = React.useReducer(reducer);
  const [macularVolOdPerc, setMacularVolOdPerc] = React.useReducer(reducer);
  const [macularVolOsPerc, setMacularVolOsPerc] = React.useReducer(reducer);
  const [gclIplOdPerc, setGclIplOdPerc] = React.useReducer(reducer);
  const [gclIplOsPerc, setGclIplOsPerc] = React.useReducer(reducer);
  const [gclIplRnflOdPerc, setGclIplRnflOdPerc] = React.useReducer(reducer);
  const [gclIplRnflOsPerc, setGclIplRnflOsPerc] = React.useReducer(reducer);

  return (
    <OctDataContext.Provider
      value={{
        octData,
        setOctData,
        peripOsPerc,
        setPeripOsPerc,
        peripOdPerc,
        setPeripOdPerc,
        totalMacularOdPerc,
        setTotalMacularOdPerc,
        totalMacularOsPerc,
        setTotalMacularOsPerc,
        macularVolOdPerc,
        setMacularVolOdPerc,
        macularVolOsPerc,
        setMacularVolOsPerc,
        gclIplOdPerc,
        setGclIplOdPerc,
        gclIplOsPerc,
        setGclIplOsPerc,
        gclIplRnflOdPerc,
        setGclIplRnflOdPerc,
        gclIplRnflOsPerc,
        setGclIplRnflOsPerc,
      }}
    >
      {children}
    </OctDataContext.Provider>
  );
};
