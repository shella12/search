import React from "react";

const DropDownItem = (props) => {
    const { item } = props;
    return (
        <li>
            {item.firstName} {item.lastName}
        </li>
    );
};

export default DropDownItem;
