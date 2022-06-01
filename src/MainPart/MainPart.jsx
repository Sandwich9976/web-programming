import { useState } from "react";
import { AsteroidCard } from "../AsteroidCard/AsteroidCard"
import styles from  "./MainPart.module.css"

export const MainPart = () => {

    const MakeAsteroidsList = () =>{
        let monthNames=[
               'января',
               'февраля',
               'марта',
               'апреля',
               'мая',
               'июня',
               'июля',
               'августа',
               'сентября',
               'октября',
               'ноября',
               'декабря',
        ]
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

        let list = []
        for(let i = 0; i < 20; i++){
            let year = "20" + (Math.random()*12 + 10).toFixed(0)
            let name = year + ' ' + characters[(Math.random()*25).toFixed(0)] + characters[(Math.random()*25).toFixed(0)]
            let date = (Math.random()*27 + 1).toFixed(0) + ' ' + monthNames[(Math.random()*11).toFixed(0)] + ' ' + year + " года"
            let size = (Math.random() * 100 + 10).toFixed(0)
            let grade = size>50? "опасен":"не опасен";
            let distance = (Math.random() * 9000000 + 1000000).toFixed(0)
            list.push({
                name:name,
                date:date,
                grade:grade,
                size:size,
                distance:distance
            })
        }
        return list;
    }

    const [asteroids, setAsteroids] = useState({
        list: MakeAsteroidsList(),
        distanceMode:0,
        showMode:0})

    const changeShowMode = (e) => {
        setAsteroids({
            ...asteroids,
            showMode: e.target.checked
        })
    }

    const changeDistanceModeToKm = () => {
        setAsteroids({
            ...asteroids,
            distanceMode: 0
        })
    }

    const changeDistanceModeToLunar = () => {
        setAsteroids({
            ...asteroids,
            distanceMode: 1
        })
    }


    return <div>
        Home
        <div className={styles.showDangerousOnly}><input type="checkbox" value={asteroids.showMode} onChange={changeShowMode}></input> Показать только опасные</div>
        <div className={styles.distanceMode}>
        Расстояние <button onClick={changeDistanceModeToKm} className={styles.distanceChooser + " " + (asteroids.distanceMode===0?styles.activeMode:"")}>в километрах</button>
         , <button onClick={changeDistanceModeToLunar} className={styles.distanceChooser + " " + (asteroids.distanceMode===1?styles.activeMode:"")}> в дистанциях до луны</button></div>
        {(asteroids.showMode === 0)?
        asteroids.list.map((item)=><div>
            <AsteroidCard name={item.name} grade={item.grade} date={item.date}
             distance={item.distance} size={item.size} distanceMode={asteroids.distanceMode}/>
        </div>):
        asteroids.list.filter((item)=>item.grade==="опасен").map((item)=><div>
            <AsteroidCard name={item.name} grade={item.grade} date={item.date}
             distance={item.distance} size={item.size} distanceMode={asteroids.distanceMode}/>
        </div>)}
    </div>
}