import { Route, Routes} from 'react-router-dom';
import React from "react";
import { MainPart } from './MainPart/MainPart';
import {createContext, useReducer, useEffect} from 'react'
import { reducer } from './Reducer';
import { ASTEROID_DISTANCE_MODE_KM, ASTEROID_SHOW_MODE_ALL } from './AsteroidConstants/AsteroidConstants';
import { DestructionPage } from './DestructionPage/DestructionPage';
import { ConvertAPIDataToList, GetAPIUrl } from './MainPart/APIData';

export const AsteroidsContext = createContext(null)

function App() {

  const [state, dispatch] = useReducer(reducer, {
    asteroidsList:[],
    destructionList:[],
    distanceMode: ASTEROID_DISTANCE_MODE_KM,
    showMode: ASTEROID_SHOW_MODE_ALL
  })

  useEffect(()=>{
    fetch(GetAPIUrl())
    .then((response)=>response.json()
    .then((resData)=>{
        dispatch({payload:ConvertAPIDataToList(resData), type:"UPDATE_ASTEROIDS_LIST"})
    })).catch((error)=>console.log(error))
  }, [])

  return (
    <div>
      <AsteroidsContext.Provider value={{state:state, dispatch:dispatch}}>
        <Routes>
          <Route path='/' element={<MainPart />} />
          <Route path='toDestroy' element={<DestructionPage />} />
        </Routes>
      </AsteroidsContext.Provider>
    </div>
  );
}

export default App;