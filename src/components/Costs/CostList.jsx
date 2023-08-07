import React from 'react';
import {CostItem} from "./CostItem";
import './CostList.css';

export const CostList = (props) => {

    if (props.costs.length === 0) {
        return <h2 className={'cost-list__fallback'}>No expenses in the selected year</h2>
    }

    return (
        <ul className={'cost-list'}>
            {props.costs.map((cost) => <CostItem key={cost.id}
                                                 description={cost.description}
                                                 date={cost.date}
                                                 amount={cost.amount}
                />
            )}
        </ul>
    );
};

