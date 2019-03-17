import React, {Component} from "react";
import classes from './Art.module.scss'
import MasterClass from "./MasterClass/MasterClass";
import Pokras from "./Pokras/Pokras";
import Exhibition from "./Exhibition/Exhibition";
import {SideTitle} from "../Common/SideTitle";

export interface IArtState {
    backgroundFloatY: number;
    masterFloatY: number;
}

class Art extends Component<{}, IArtState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            backgroundFloatY: 0,
            masterFloatY: 0
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (): void => {
        let backgroundFloatY, masterFloatY;
        const backgroundOffset = 200;
        const backgroundYTrigger = 1200;
        const masterOffset = 205;
        const masterYTrigger = 1350;
        const yPosition = window.scrollY;

        backgroundFloatY = (yPosition > backgroundYTrigger) ? -backgroundOffset : 0;
        masterFloatY = (yPosition > masterYTrigger) ? -masterOffset : 0;
        if (backgroundFloatY !== this.state.backgroundFloatY || masterFloatY !== this.state.masterFloatY) {
            this.setState({backgroundFloatY: backgroundFloatY, masterFloatY: masterFloatY});
        }
    };

    render() {
        const backgroundTransformStyles = {
            transform: `translate(0px, ${this.state.backgroundFloatY}px)`
        };

        const masterTransformStyles = {
            transform: `translate(0px, ${this.state.masterFloatY}px)`
        };

        return (
            <div className={classes.Art}>
                <div className={classes.ArtMasterClass}>
                    <div className={classes.ArtMasterClassContainer} style={masterTransformStyles}>
                        <MasterClass/>
                    </div>
                    <div className={classes.ArtSideTitleContainer}>
                        <SideTitle className={classes.ArtSideTitle} lineWidth={150} title='Искусство'/>
                        <div className={classes.ArtBackground} style={backgroundTransformStyles}></div>
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