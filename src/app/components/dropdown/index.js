import React, { useState, useEffect, useRef } from 'react';
import './index.scss';

const Dropdown = () => {
    const node = useRef();
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseDown = e => {
        // prevents inside click
        if (
            e &&
            e.target &&
            node &&
            node.current &&
            node.current.contains(e.target)
        ) {
            return;
        }

        // on outside click
        document.removeEventListener("mousedown", handleMouseDown, false);
        setShowDropdown(false);
    };

    const toggleDropdown = () => {
        if (showDropdown === false) {
            document.addEventListener("mousedown", handleMouseDown, false);
        } else {
            document.removeEventListener("mousedown", handleMouseDown, false);
        }
        setShowDropdown(!showDropdown);
    };

    return (
        <div ref={node} className="dropdown">
            <div className="dropdown_header" onClick={toggleDropdown}>Dropdown</div>
            {showDropdown &&
                <ul>
                    <li onClick={toggleDropdown}>dropdown item 1</li>
                    <li onClick={toggleDropdown}>dropdown item 2</li>
                </ul>
            }
        </div>
    );
}

export default Dropdown;
