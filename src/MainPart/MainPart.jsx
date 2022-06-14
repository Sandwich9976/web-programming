import { useEffect, useState } from "react";
import { AsteroidCardList } from "../AsteroidCardList/AsteroidCardList"
import styles from  "./MainPart.module.css"
import React from "react";
import { ASTEROID_DISTANCE_MODE_KM, ASTEROID_SHOW_MODE_ALL } from "../AsteroidConstants/AsteroidConstants";
import { GetAPIUrl, ConvertAPIDataToList } from "./APIData";
import { Navigation } from "../Navigation/Navigation";

export const MainPart = () => {

    const [asteroids, setAsteroids] = useState([{
        name:"loading...",
        date:"loading...",
        grade:"loading...",
        size:0,
        distance:0
    }])
    const [showParams, setShowParams] = useState({
        distanceMode: ASTEROID_DISTANCE_MODE_KM,
        showMode: ASTEROID_SHOW_MODE_ALL
    })
    useEffect(()=>{
        fetch(GetAPIUrl())
        .then((response)=>response.json()
        .then((resData)=>{
            setAsteroids(ConvertAPIDataToList(resData))
        })).catch((error)=>console.log(error))
    }, [])
    return <div className={styles.MainPart}>
        <Navigation showParams={showParams} setShowParams={setShowParams} />
        <AsteroidCardList list={asteroids} showParams={showParams} />
    </div>
}