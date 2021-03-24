import React, { useState } from 'react';
import './index.scss';

const Header = (props) => {

    const { onSearch } = props;
    const [searchVal, setSearchVal] = useState('');

    const onKeyUp = (event) => {
        if (event && event.which === 13) {
            onSearch(searchVal);
        }
    }


    const onChange = (event) => {
        setSearchVal(event.target.value);
    }

    return (
        <div className="header">
            <h1 className="header_title">Mini Youtube</h1>
            <div className="header__search-tab">
                <input
                    placeholder="Search here..."
                    className="header__search-tab_input-field"
                    onKeyUp={onKeyUp}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}

export default Header;
