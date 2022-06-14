import { useContext, useEffect, useState } from "react";
import { AsteroidCardList } from "../AsteroidCardList/AsteroidCardList"
import styles from  "./MainPart.module.css"
import React from "react";
import { Navigation } from "../Navigation/Navigation";
import { AsteroidsContext } from "../App";
import { MainPartHeader } from "./MainPartHeader/MainPartHeader";

export const MainPart = () => {

    const {state, dispatch} = useContext(AsteroidsContext)

    return <div className={styles.home}>
            <MainPartHeader />
            <div className={styles.line} />
            <Navigation showMode={state.showMode} distanceMode={state.distanceMode} dispatch={dispatch} />
            <AsteroidCardList list={state.asteroidsList} />
        </div>
}