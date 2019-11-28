import React from "react";
import './search.scss';

export default class Search extends React.Component {
    render() {
        return (
            <div className='search'>
                <div className='search__block'>
                    <form className='search__form' method='POST'>
                        <input
                            className='search__form-input'
                            type='search'
                            name='search'
                            id='seatch'
                            placeholder='Поиск...'
                        />
                        {/* <div className='search__form-error'>Короткое поисковое слово</div> */}
                        <input className='search__form-submit' type='submit' value='Найти' />
                    </form>
                </div>
            </div>
        );
    }
}
