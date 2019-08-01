import React from 'react'; 
import AccountInformationCard from './AccountInformationCard'; 
import './Account.css';

class Account extends React.Component {
    state = {first: 'Aaron', last: 'Marroquin', email: 'point@mom.com', username: 'hashbrowns', password: 'putty'}

    render() {
        return ( 
            <div className="AccountDisplay">
                <AccountInformationCard display={"Name"} displayValue={this.state.first}></AccountInformationCard>
                <AccountInformationCard display={"Last"} displayValue={this.state.last}></AccountInformationCard>
                <AccountInformationCard display={"Email"} displayValue={this.state.email}></AccountInformationCard>
                <AccountInformationCard display={"Username"}displayValue={this.state.username}></AccountInformationCard>
                <AccountInformationCard display={"Password"} displayValue={this.state.password}></AccountInformationCard>
            </div>
        );  
    }
}

export default Account;