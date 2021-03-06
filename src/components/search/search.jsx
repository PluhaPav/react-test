import React from "react";
import "./search.scss";

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { canSubmit: true, valueSearch: "" };
    }

    handleSubmit = event => {
        event.preventDefault();
        let { canSubmit, valueSearch } = this.state;
        canSubmit = valueSearch.length > 0;
        this.setState({ canSubmit, valueSearch });
    };

    handleSearch = event => {
        let { canSubmit, valueSearch } = this.state;
        const { value } = event.target;
        canSubmit = value.length > 3;
        valueSearch = value;
        this.setState({ canSubmit, valueSearch });
    };

    render() {
        const { canSubmit } = this.state;
        return (
            <div className='search'>
                <div className='search__block'>
                    <form className='search__form' onSubmit={ this.handleSubmit }>
                        <input className='search__form-input' type='search' name='search' id='seatch' placeholder='Поиск...' onChange={ this.handleSearch } />
                        {!canSubmit && <div className='search__form-error'>Короткое поисковое слово</div>}
                        <input className='search__form-submit' type='submit' value='Найти' disabled={ !canSubmit } />
                    </form>
                </div>
            </div>
        );
    }
}
