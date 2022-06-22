import React from "react";
import styles from "../styles/homeview.module.css"

export default function HomeView(){
    return<>
        <div className={styles.homeSpaceTarget}>
            <div>
                <h3 className={styles.homeSpaceTargeth3}>So you want to travel to</h3>
                <h1 className={styles.homeSpaceTargeth1}>SPACE </h1>
                <p className={styles.homeSpaceTargetp}>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
            </div>
        </div>
    </>
}