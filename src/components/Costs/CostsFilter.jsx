import React from 'react';
import './CostsFilter.css';

export const CostsFilter = (props) => {

    const yearChangeHandler = (e) => {
        props.onChangeYear(e.target.value);

    }

    return (
        <div className={'costs-filter'}>
            <div className={'costs-filter__control'}>
                <label>Filter by year</label>
                <select value={props.year} onChange={yearChangeHandler}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};