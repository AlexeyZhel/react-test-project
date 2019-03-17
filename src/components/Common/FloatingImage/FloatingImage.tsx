import React, {Component} from 'react';
import classes from './FloatingImage.module.scss'
import {IFloatingImageProps, IFloatingImageState} from "./FloatingImage.interface";

class FloatingImage extends Component<IFloatingImageProps, IFloatingImageState> {
    constructor(props: IFloatingImageProps) {
        super(props);
        this.state = {
            offsetX: 0,
            offsetY: 0,
            isHovered: false
        }
    }

    onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (this.props.float) {
            const x = Math.floor((this.props.width / 2 - e.nativeEvent.offsetX) * 0.02);
            const y = Math.floor((this.props.height / 2 - e.nativeEvent.offsetY) * 0.02);
            this.setState({
                offsetX: x,
                offsetY: y,
                isHovered: true
            });
        }
    };

    onMouseOut = () => {
        if (this.props.float) {
            this.setState({
                isHovered: false
            });
        }
    };

    render() {
        let transformStyles = {};
        if (this.state.isHovered) {
            transformStyles = {
                transform: `translate(${this.state.offsetX}px, ${this.state.offsetY}px) scale(1.02)`
            };
        }

        return (
            <div className={[
                classes.FloatingImageContainer,
                this.props.className
            ].join(' ')}
                 style={{
                     maxWidth: this.props.width,
                     maxHeight: this.props.height,
                     minWidth: this.props.width,
                     minHeight: this.props.height
                 }}>
                <div className={classes.FloatingImage} onMouseMove={this.onMouseMove} onMouseOut={this.onMouseOut}
                     style={transformStyles}>
                    <img
                        src={this.props.src}
                        width={this.props.width}
                        height={this.props.height}/>
                </div>
            </div>
        );
    }
}

export default FloatingImage

