import React, {useState} from 'react';
import './CostForm.css';

const CostForm = (props) => {


    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');


    // const [userInput, setUserInput] = useState({
    //     name: '',
    //     amount: '',
    //     date: '',
    // });

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     name: event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         name: event.target.value,
        //     }
        // })
    }

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value,
        // })
    }

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value)
        // setUserInput({
        //     date: event.target.value,
        // })
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate),
        }

        props.onSaveCostData(costData);

        setInputName('');
        setInputAmount('')
        setInputDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={'new-cost__controls'}>
                <div className={'new-cost__control'}>
                    <label>Name</label>
                    <input type="text" value={inputName} onChange={nameChangeHandler}/>
                </div>

                <div className={'new-cost__control'}>
                    <label>Sum</label>
                    <input type="number" value={inputAmount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>

                <div className={'new-cost__control'}>
                    <label>Name</label>
                    <input type="date" value={inputDate} min='2019-01-01' step='2023-8-4' onChange={dateChangeHandler}/>
                </div>
            </div>

            <div className={'new-cost__actions'}>
                <button type='submit'>Add expense</button>
                <button type='button' onClick={props.onCancel}>Cansel</button>
            </div>

        </form>
    );
};

export default CostForm;