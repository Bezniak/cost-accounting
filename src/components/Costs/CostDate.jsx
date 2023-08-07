import React from 'react';
import './CostDate.css';

export const CostDate = ({date}) => {

    const month = date.toLocaleString("en-US", {month: 'long'});
    const year = date.getFullYear();
    const day = date.toLocaleString("en-US", {day: '2-digit'});

    return (
        <div className={'cost-date'}>
            <div className={'cost-date__month'}>{month}</div>
            <div className={'cost-date__year'}>{year}</div>
            <div className={'cost-date__day'}>{day}</div>
        </div>
    );
};

