import React from 'react'
import { numberFormat } from '../../utils/digit_format';
import Button from './../Button/Button';
import './transaction.css'

function Transaction({transaction}) {
    const {title, amount, description} = transaction;

    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">${numberFormat(amount)}</p>
                <p className="account-amount-description">{description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <Button text='View transactions' classname='transaction-button' />
            </div>
        </section>
    )
}

export default Transaction