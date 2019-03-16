import React, {Component} from "react";
import classes from './LastConcert.module.scss'
import scorpionsImage from '../../../assets/images/scorpions.png'
import {Button, ButtonType} from "../../Common/Button";

class LastConcert extends Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <div className={classes.LastConcert}>
                <div className={classes.LastConcertImage}>
                    <img src={scorpionsImage} width={283} height={370}/>
                </div>
                <div className={classes.LastConcertDescription}>
                    <div className={classes.LastConcertTitle}>
                        <div className={classes.LastConcertSubTitle}>
                            Прощальный концерт
                        </div>
                        <div className={classes.LastConcertSubTitle}>
                            Scorpions
                        </div>
                    </div>
                    <div className={classes.LastConcertText}>
                        Серией крупных концертов в России завершается юбилейный гастрольный тур Scorpions, посвященный
                        50-летию легендарного коллектива.
                    </div>
                    <Button className={classes.FullButton} btnType={ButtonType.TextWithArrow} text={'Полностью'}/>
                </div>
            </div>
        );
    }
}

export default LastConcert;
