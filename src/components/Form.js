import React from 'react';
import { Categories } from '../constants/enums';

function Form({ onCategoryChange, selectedCategory }) {
  return (
    <div className='form'>
      <select className='select' value={selectedCategory} onChange={(event) => onCategoryChange(event)}>
        {
          Categories.map((category, categoryIndex) => (
            <option key={categoryIndex} value={category.value}>
              {category.label}
            </option>
          ))
        }
      </select>
    </div>
  );
}

export default Form;
