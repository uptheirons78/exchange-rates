import React from 'react';
import './table-row.styles.css';

export const TableRow = props => {
  return (
    <tr className="table-row">
      <td>
        <img
          src={ `https://www.countryflags.io/${props.country.substr(0,2)}/flat/64.png` }
        />
      </td>
      <td>{props.country}</td>
      <td>{props.rate}</td>
    </tr>
  );
}