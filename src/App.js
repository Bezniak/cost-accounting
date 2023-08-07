import React, {useState} from 'react';
import {Costs} from "./components/Costs/Costs";
import {NewCost} from "./components/NewCost/NewCost";


const INITIAL_COSTS = [
    {
        id: 'c1',
        date: new Date(2021, 2, 12),
        description: 'Lamborghini Aventador',
        amount: 789_809,
    },
    {
        id: 'c2',
        date: new Date(2022, 3, 25),
        description: 'MacBook',
        amount: 5200,
    },
    {
        id: 'c3',
        date: new Date(2023, 7, 4),
        description: 'Penthouse',
        amount: 15_000_000,
    },
]

const App = () => {


    const [costs, setCosts, set] = useState(INITIAL_COSTS);


    const addCostHandler = (cost) => {
        setCosts((prevState) => {
            return [cost, ...prevState];
        });
    }

    return (
        <div>
            <NewCost onAddCost={addCostHandler}/>
            <Costs costs={costs}/>
        </div>
    );
};

export default App;