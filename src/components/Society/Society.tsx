import React, {Component} from "react";
import classes from './Society.module.scss'
import MainNews from "./MainNews/MainNews";
import NewsGrid from "./NewsGrid/NewsGrid";
import {SideTitle} from "../Common/SideTitle";

export interface ISocietyState {
    backgroundFloatY: number;
    masterFloatY: number;
}

class Society extends Component<{}, {}> {
    constructor(props: {}) {
        super(props);
        // this.state = {
        //     backgroundFloatY: 0,
        //     masterFloatY: 0
        // }
    }

    // componentDidMount() {
    //     window.addEventListener('scroll', this.handleScroll);
    // }
    //
    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll);
    // }
    //
    // handleScroll = (): void => {
    //     let backgroundFloatY, masterFloatY;
    //     const backgroundOffset = 200;
    //     const backgroundYTrigger = 1200;
    //     const masterOffset = 205;
    //     const masterYTrigger = 1350;
    //     const yPosition = window.scrollY;
    //
    //     backgroundFloatY = (yPosition > backgroundYTrigger) ? -backgroundOffset : 0;
    //     masterFloatY = (yPosition > masterYTrigger) ? -masterOffset : 0;
    //     if (backgroundFloatY !== this.state.backgroundFloatY || masterFloatY !== this.state.masterFloatY) {
    //         this.setState({backgroundFloatY: backgroundFloatY, masterFloatY: masterFloatY});
    //     }
    // };

    render() {
        // const backgroundTransformStyles = {
        //     transform: `translate(0px, ${this.state.backgroundFloatY}px)`
        // };
        //
        // const masterTransformStyles = {
        //     transform: `translate(0px, ${this.state.masterFloatY}px)`
        // };

        return (
            <div className={classes.Society} id='society'>
                <div className={classes.AbsoluteAnchor}>
                    <div className={classes.SocietyBackground}></div>
                    <SideTitle className={classes.SocietySideTitle} lineWidth={90} title='Общество'/>
                </div>
                <MainNews/>
                <NewsGrid/>
            </div>
        );
    }
}

export default Society;

{/*<div className={classes.ArtMasterClass}>*/}
{/*<div className={classes.ArtMasterClassContainer} style={masterTransformStyles}>*/}
{/*<MasterClass/>*/}
{/*</div>*/}
{/*<div className={classes.ArtSideTitleContainer}>*/}
{/*<SideTitle className={classes.ArtSideTitle} lineWidth={150} title='Искусство'/>*/}
{/*<div className={classes.ArtBackground} style={backgroundTransformStyles}></div>*/}
{/*</div>*/}
{/*</div>*/}
{/*<div className={classes.PokrasExhibitionContainer}>*/}
{/*<Pokras/>*/}
{/*<Exhibition/>*/}
{/*</div>*/}