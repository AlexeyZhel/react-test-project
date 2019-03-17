import React, {Component} from "react";
import classes from './Art.module.scss'
import MasterClass from "./MasterClass/MasterClass";
import Pokras from "./Pokras/Pokras";
import Exhibition from "./Exhibition/Exhibition";
import {SideTitle} from "../Common/SideTitle";

class Art extends Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <div className={classes.Art}>
                <div className={classes.ArtMasterClass}>
                    <MasterClass/>
                    <div className={classes.ArtSideTitleContainer}>
                        <SideTitle className={classes.ArtSideTitle} lineWidth={150} title='Искусство' />
                        <div className={classes.ArtBackground}></div>
                    </div>
                </div>
                <div className={classes.PokrasExhibitionContainer}>
                    <Pokras/>
                    <Exhibition/>
                </div>
            </div>
        );
    }
}

export default Art;