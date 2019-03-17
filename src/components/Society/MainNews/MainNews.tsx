import React, {Component} from "react";
import classes from './MainNews.module.scss'
import FloatingImage from "../../Common/FloatingImage/FloatingImage";
import mainNewsImage from '../../../assets/images/news-main.png'
import {Button, ButtonType} from "../../Common/Button";
import SocialNetworkButtons from "../../Common/SocialNetworkButtons/SocialNetworkButtons";

class MainNews extends Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <div className={classes.MainNews}>
                <div className={classes.NewsImageContainer}>
                    <FloatingImage src={mainNewsImage} width={299} height={370} float={true}/>
                    <SocialNetworkButtons className={classes.MainNewsSocialNetworkButtons}
                                          visible={true}/>
                </div>
                <div className={classes.NewsTitle}>
                    Почему нельза перекрашивать фотографии?
                </div>
                <Button className={classes.NewsButton} btnType={ButtonType.TextWithArrow} text='Полностью'/>
            </div>
        );
    }
}

export default MainNews;
