import React from "react";

const DropDownItem = (props) => {
    const { item } = props;
    return (
        <li className='drop-down-list'>
            {item.firstName} {item.lastName}
        </li>
    );
};

export default DropDownItem;
