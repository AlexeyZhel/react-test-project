import React, {Component} from "react";
import classes from './NewsGrid.module.scss'
import FloatingImage from "../../Common/FloatingImage/FloatingImage";
import firstNewsImage from '../../../assets/images/news-1.png'
import secondNewsImage from '../../../assets/images/news-2.png'
import thirdNewsImage from '../../../assets/images/news-3.png'
import fourthNewsImage from '../../../assets/images/news-4.png'

class NewsGrid extends Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <div className={classes.NewsGrid}>
                <div className={classes.NewsContainer}>
                    <FloatingImage src={firstNewsImage} width={190} height={190}/>
                    <div className={classes.ImageText}>Глобальная Блокировка</div>
                </div>
                <div className={classes.NewsContainer}>
                    <FloatingImage src={secondNewsImage} width={190} height={190}/>
                    <div className={classes.ImageText}>Запрет на улов в японском море</div>
                </div>
                <div className={classes.NewsContainer}>
                    <FloatingImage src={thirdNewsImage} width={190} height={190}/>
                    <div className={classes.ImageText}>Ген прокурор был заядлым геймером</div>
                </div>
                <div className={classes.NewsContainer}>
                    <FloatingImage src={fourthNewsImage} width={190} height={190}/>
                    <div className={classes.ImageText}>Латвия: законы просты</div>
                </div>
            </div>
        );
    }
}

export default NewsGrid;
