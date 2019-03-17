import React, {Component} from "react";
import classes from './Fashion.module.scss'
import SummerColor from "./SummerColor/SummerColor";
import ImageGrid from "./ImageGrid/ImageGrid";
import {SideTitle} from "../Common/SideTitle";

export interface IFashionState {
    backgroundFloatY: number
}

class Fashion extends Component<{}, IFashionState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            backgroundFloatY: 0
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (): void => {
        let backgroundFloatY;
        const backgroundOffset = 332;
        const backgroundYTrigger = 2100;
        const yPosition = window.scrollY;

        backgroundFloatY = (yPosition > backgroundYTrigger) ? -backgroundOffset : 0;
        if (backgroundFloatY !== this.state.backgroundFloatY) {
            this.setState({backgroundFloatY: backgroundFloatY});
        }
    };

    render() {
        const backgroundTransformStyles = {
            transform: `translate(0px, ${this.state.backgroundFloatY}px)`
        };

        return (
            <div className={classes.Fashion} id='fashion'>
                <div className={classes.AbsoluteAnchor}>
                    <div className={classes.FashionBackground} style={backgroundTransformStyles}></div>
                    <SideTitle className={classes.FashionSideTitle} lineWidth={190} title='Мода'/>
                </div>
                <ImageGrid/>
                <SummerColor/>
            </div>
        );
    }
}

export default Fashion;
