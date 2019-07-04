import React from 'react';
import { TableRow } from '../table-row/table-row.component';
import './table.styles.css';


export const Table = props => (
  <table className="table">
    <thead>
      <tr>
        <th>Flag</th>
        <th>Country</th>
        <th>Rate</th>
      </tr>
    </thead>
    <tbody>
      { props.rates.map(rate => <TableRow key={rate[0]} country={rate[0]} rate={rate[1]} />) }
    </tbody>
  </table>
);