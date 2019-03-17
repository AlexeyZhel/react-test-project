import React, {Component} from "react";
import classes from './SummerColor.module.scss'
import FloatingImage from "../../Common/FloatingImage/FloatingImage";
import summerImage from '../../../assets/images/summer-color.png'
import {Button, ButtonType} from "../../Common/Button";
import SocialNetworkButtons from "../../Common/SocialNetworkButtons/SocialNetworkButtons";

class SummerColor extends Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <div className={classes.SummerColor}>
                <div className={classes.ImageContainer}>
                    <FloatingImage src={summerImage} width={593} height={501} float={true}/>
                    <SocialNetworkButtons className={classes.SummerColorSocialNetworkButtons}
                                          visible={true}/>
                </div>
                <div className={classes.SummerColorInfo}>
                    <div className={classes.SummerColorTitle}>
                        Какого цвета лето?
                    </div>
                    <div className={classes.SummerColorText}>
                        Сейчас середина января, а значит, примерно
                        через месяц в магазины начнет поступать одежда
                        сезона весна-лето 2015. Мы выбрали 23 ключевые тенденции,
                        под знаком которых пройдет модный теплый сезон в этому году.
                    </div>
                    <Button btnType={ButtonType.TextWithArrow} className={classes.SummerColorButton} text='Полностью'/>
                </div>

            </div>
        );
    }
}

export default SummerColor;
