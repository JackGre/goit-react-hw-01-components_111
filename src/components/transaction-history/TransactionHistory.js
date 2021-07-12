import React from "react";
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css'

const TransactionHistory = ({ items}) => {
    return (
        <table className={styles.table}>
           <thead>
             <tr>
               <th>Type</th>
               <th>Amount</th>
               <th>Currency</th>
             </tr>
           </thead>
           <tbody>
               {items.map(item => {
                   return (
                       <tr key={item.id}>
                           <td>
                               {item.type.slice(0, 1).toUpperCase() + item.type.slice(1)}
                           </td>
                           <td>{item.amount}</td>
                           <td>{item.currency}</td>
                       </tr>
                   );
               })}
           </tbody>
        </table>

    );
};

TransactionHistory.propTypes = {
    items:PropTypes.array.isRequired
};

export default TransactionHistory;