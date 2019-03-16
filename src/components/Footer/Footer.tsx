import React, {Component} from "react";
import classes from './Footer.module.scss'
import {ILinkGroup, ILinkItem} from "./Footer.interface";
import {Button, ButtonType} from "../Common/Button";

class Footer extends Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <div className={classes.Footer}>
                <div className={classes.LinksAndSubscribe}>
                    {LinkList.map((group: ILinkGroup, index: number) => {
                        return (<div key={index} className={classes.LinkGroup}>
                            <div className={[
                                classes.LinkTitle,
                                classes.LinkItem
                            ].join(' ')}> {group.title}
                            </div>
                            {group.items.map((item: ILinkItem, index: number) => {
                                return (<div key={index} className={classes.LinkItem}>{item.name}</div>)
                            })}
                        </div>)
                    })}
                    <div className={classes.Subscribe}>
                        <div className={classes.SubscribeText}>Подписывайся</div>
                        <Button className={classes.SubscribeBtn} btnType={ButtonType.TextWithArrow}/>
                        <div  className={classes.SubscribeDescription}>
                            <div className={classes.SubscribeDescriptionItem}>Читайте, думайте и еще раз.</div>
                            <div className={classes.SubscribeDescriptionItem}>Посмотреть, почитать, повторить.</div>
                        </div>
                    </div>
                </div>
                <div className={classes.Separator}>
                </div>
                <div className={classes.ConfidentAndSocial}>
                    <div className={classes.Confident}>

                    </div>
                    <div className={classes.Social}> </div>

                </div>
            </div>
        );
    }
}

export default Footer;

const LinkList: ILinkGroup[] = [
    {
        title: 'Шоубиз',
        items: [
            {name: 'Киркоров'},
            {name: 'Концерты'},
            {name: 'Интервью'},
            {name: 'Фото'},
            {name: 'Зарубежное'},
            {name: 'Наши'},
            {name: 'Скандалы'}
        ]
    },
    {
        title: 'Общество',
        items: [
            {name: 'Мир'},
            {name: 'Россия'},
            {name: 'Волнения'},
            {name: 'ГТО'},
            {name: 'События'}
        ]
    },
    {
        title: 'Искусство',
        items: [
            {name: 'Выставки'},
            {name: 'Мастера'},
            {name: 'Учеба'},
            {name: 'Новые имена'},
            {name: 'Арт-объект'},
            {name: 'Сделано!'}
        ]
    },
    {
        title: 'Красота',
        items: [
            {name: 'Тренды'},
            {name: 'Бренды'},
            {name: 'Утреннее'},
            {name: 'Ешь и пей'},
            {name: 'Акссесуары'},
            {name: 'Здоровье'},
            {name: 'Беседы о'}
        ]
    },
    {
        title: 'Редакция',
        items: [
            {name: 'По рекламе'},
            {name: 'Контакты'},
            {name: 'Манифесты'},
            {name: 'Вакансии'}
        ]
    }
];
