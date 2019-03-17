import React, {Component} from "react";
import classes from './ImageGrid.module.scss'
import FloatingImage from "../../Common/FloatingImage/FloatingImage";
import image1 from '../../../assets/images/grid-1.png'
import image2 from '../../../assets/images/grid-2.png'
import image3 from '../../../assets/images/grid-3.png'
import image4 from '../../../assets/images/grid-4.png'
import image5 from '../../../assets/images/grid-5.png'

class ImageGrid extends Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <div className={classes.ImageGrid}>
                <div className={classes.ImageGridLine}>
                    <div className={classes.ImageContainer}>
                        <div className={classes.ImageText}>Yanina</div>
                        <FloatingImage src={image1} width={190} height={190}/>
                    </div>
                    <div className={classes.ImageContainer}>
                        <div className={classes.ImageText}>Индиго мир</div>
                        <FloatingImage src={image2} width={190} height={190}/>
                    </div>
                </div>
                <div className={classes.ImageGridLine}>
                    <div className={classes.ImageContainer}>
                        <FloatingImage src={image3} width={190} height={190}/>
                        <div className={classes.ImageText}>Слишком по делу</div>
                    </div>
                    <div className={classes.ImageContainer}>
                        <FloatingImage src={image4} width={190} height={190}/>
                        <div className={classes.ImageText}>Фиалковый</div>
                    </div>
                    <div className={classes.ImageContainer}>
                        <FloatingImage src={image5} width={190} height={190}/>
                        <div className={classes.ImageText}>Форс-мажор</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageGrid;
