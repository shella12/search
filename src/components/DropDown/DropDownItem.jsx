import React from "react";

const DropDownItem = (props) => {
    const { item, onClickHandler } = props;
    return (
        <li className='drop-down-list' onClick={() => onClickHandler(item.id)}>
            {item.firstName} {item.lastName}
        </li>
    );
};

export default DropDownItem;
