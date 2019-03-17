import React, {Component} from "react";
import classes from './Society.module.scss'
import MainNews from "./MainNews/MainNews";
import NewsGrid from "./NewsGrid/NewsGrid";
import {SideTitle} from "../Common/SideTitle";

class Society extends Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
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
