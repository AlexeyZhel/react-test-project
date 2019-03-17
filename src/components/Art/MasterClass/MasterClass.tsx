import React, {Component} from "react";
import classes from './MasterClass.module.scss'
import FloatingImage from "../../Common/FloatingImage/FloatingImage";
import masterClassImage from '../../../assets/images/master-class.png'
import {Button, ButtonType} from "../../Common/Button";

class MasterClass extends Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <div className={classes.MasterClass}>
                <div className={classes.MasterClassImage}>
                    <FloatingImage src={masterClassImage} width={693} height={388} float={true}/>
                </div>
                <div className={classes.MasterClassNews}>
                    <div className={classes.MasterClassTitle}>
                        Мастер-класс настенной живописи в санкт-петербурге
                    </div>
                    <div className={classes.MasterClassDescription}>
                        Серией крупных концертов в России завершается юбилейный гастрольный тур, посвященный 50-летию
                        легендарного коллектива. В мастер-классе приняли участие 10 тысяч человек.
                    </div>
                    <Button className={classes.MasterClassButton} btnType={ButtonType.TextWithArrow}
                            text={'Полностью'}/>
                </div>
            </div>
        );
    }
}

export default MasterClass;
