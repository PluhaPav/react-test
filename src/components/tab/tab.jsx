import React from "react";
import list from "../../assets/static/list/listGenreMovie";
import "./tab.scss";
import image from "../../assets/static/image/poster/image.png";
import picture from "../../assets/static/image/poster/picture.png";
import picture1 from "../../assets/static/image/poster/picture (1).png";
import picture2 from "../../assets/static/image/poster/picture (2).png";

export default class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = { list };
    }

    render() {
        return (
            <div className='tab'>
                <div className='tab-title'>
                    <h2>Новинки</h2>
                </div>
                <div className='tab-list films'>
                    <div className='tab-list__item'>
                        <div className='tab-list__item-img'>
                            <img src={ image } alt='' />
                            <div className='tab-list__item-description'>
                                <div className='inner'>Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.</div>
                            </div>
                        </div>
                        <div className='tab-list__item-title'>Мульт в кино. Выпуск №103. Некогда грустить!</div>
                    </div>
                    <div className='tab-list__item'>
                        <div className='tab-list__item-img'>
                            <img src={ picture } alt='' />
                            <div className='tab-list__item-description'>
                                <div className='inner'>Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.</div>
                            </div>
                        </div>
                        <div className='tab-list__item-title'>Новый Бэтмен</div>
                    </div>
                    <div className='tab-list__item'>
                        <div className='tab-list__item-img'>
                            <img src={ picture1 } alt='' />
                            <div className='tab-list__item-description'>
                                <div className='inner'>Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.</div>
                            </div>
                        </div>
                        <div className='tab-list__item-title'>Однажды... в Голливуде</div>
                    </div>
                    <div className='tab-list__item'>
                        <div className='tab-list__item-img'>
                            <img src={ picture2 } alt='' />
                            <div className='tab-list__item-description'>
                                <div className='inner'>Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.</div>
                            </div>
                        </div>
                        <div className='tab-list__item-title'>Стриптизёрши</div>
                    </div>
                </div>
            </div>
        );
    }
}
