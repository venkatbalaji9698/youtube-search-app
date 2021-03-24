import React, { useState } from 'react';
import { PathConstants } from '../../constants/path-constants';
import './index.scss';

const Header = (props) => {

    const { onSearch, history } = props;
    const [searchVal, setSearchVal] = useState('');

    const onKeyUp = (event) => {
        if (event && event.which === 13) {
            onSearch(searchVal);
        }
    }


    const onChange = (event) => {
        setSearchVal(event.target.value);
    }

    const handleGoToPageThree = () => {
        history.push(PathConstants.CARDS_LIST);
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
            <p className="header_right" onClick={handleGoToPageThree}>Go to page 3</p>
        </div>
    )
}

export default Header;
