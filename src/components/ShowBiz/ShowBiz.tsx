import React, {Component} from "react";
import classes from './ShowBiz.module.scss'
import {Button, ButtonType} from "../Common/Button";
import singer from '../../assets/images/singer.png'
import FloatingImage from "../Common/FloatingImage/FloatingImage";

class ShowBiz extends Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <div className={classes.ShowBiz}>
                <div className={classes.EditorialChoice}>
                    <div className={classes.EditorialChoiceText}>
                        Выбор редакции
                    </div>
                    <div className={[
                        classes.EditorialChoiceMainText,
                        classes.EditorialChoiceMainTextFirst
                    ].join(' ')}>
                        EXPROVISION.
                    </div>
                    <div className={classes.EditorialChoiceMainText}>
                        ЗАКУЛИСЫ
                    </div>
                    <div className={classes.EditorialChoiceName}>
                        Анна Простынцева
                    </div>
                    <div className={classes.EditorialChoiceButton}>
                        <Button btnType={ButtonType.Text} text={'Заглянуть'}/>
                    </div>
                </div>
                <FloatingImage className={classes.SingerImage} src={singer} width={696} height={653}/>
                <div className={classes.ShowBizText}>
                    <div className={classes.ShowBizLineContainer}>
                        <div className={classes.ShowBizLine}></div>
                    </div>
                    <div className={classes.RotatedTextContainer}>
                        <div className={classes.RotatedText}>
                            Шоубиз
                        </div>
                    </div>
                </div>
                <div className={classes.PlaceHolder}></div>

                {/*<EditorialChoice/>*/}
                {/*<LastConcert/>*/}
                {/*<Interview/>*/}
            </div>
        );
    }
}

export default ShowBiz;
