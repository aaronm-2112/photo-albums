import React from 'react';
import './AccountInformationCard.css';

const AccountInformationCard = (props) => {

    return (
        <div className="AccountInfoCard">
            <div className="first_field">{props.display}</div>
            <div className="second_field">{props.displayValue}</div>
            <div className="third_field"> <button className="ui primary button">Edit</button></div>
        </div>
    );
}

export default AccountInformationCard; 