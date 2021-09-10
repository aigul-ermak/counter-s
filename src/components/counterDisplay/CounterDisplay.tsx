import React from 'react';
import '../../App.css';
import s from './CounterDisplay.module.css'
import CustomButton from '../customButton/CustomButton';

type CounterDisplayPropsType = {

}

const CounterDisplay = (props: CounterDisplayPropsType) => {
    return (
        <div className='mainContainer'>
            <div className='valueContainer'>
ggg
            </div>
            <div className='buttonContainer'>
                <CustomButton />
                <CustomButton />
            </div>

        </div>
    )
}

export default CounterDisplay;
