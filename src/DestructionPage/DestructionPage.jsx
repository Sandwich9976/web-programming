import React, { useContext } from "react"
import { AsteroidsContext } from "../App"
import { AsteroidCardList } from "../AsteroidCardList/AsteroidCardList"
import { DestructionPageHeader } from "./DestructionPageHeader/DestructionPageHeader"
import styles from "./DestructionPage.module.css"
import { Navigation } from "../Navigation/Navigation"


export const DestructionPage = () =>{
    const {state, dispatch} = useContext(AsteroidsContext)

    return <div className={styles.destructionPage}>
            <DestructionPageHeader />
            <div className={styles.line} />
            <Navigation showMode={state.showMode} distanceMode={state.distanceMode} dispatch={dispatch} />
            <AsteroidCardList list={state.destructionList} />
        </div>
}
