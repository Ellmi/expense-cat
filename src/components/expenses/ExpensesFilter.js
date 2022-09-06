import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const handleSelectionChange = (event) => {
    props.onSelect(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="filterYear">Filter by year</label>
        <select
          id="filterYear"
          value={props.selectedYear}
          onChange={handleSelectionChange}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
