import React from "react";
import "./footer.scss";
import Vector from "../../assets/static/image/logo/Vector.png";

export default class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer__container container'>
                    <div className='footer__container-logo'>
                        <img className='footer__container-img' src={ Vector } alt='' />
                    </div>
                    <div className='footer__container-adress'>
                        <span className='footer__container-line'>
                            426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)
                        </span>
                        <span className='footer__container-line'>
                            <a href='tel:+73412938861'>+7 (3412) 93-88-61</a>,<a href='tel:432929'>43-29-29</a>
                        </span>
                        <span className='footer__container-line'>
                            <a
                                className='footer__container-link'
                                href='https://htc-cs.ru'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                htc-cs.ru
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
