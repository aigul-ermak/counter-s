import React from 'react';
import '../../App.css';
import s from './CounterSettings.module.css'

import CustomButton from '../customButton/CustomButton';
import SettingsBlock from '../settingsBlock/SettingsBlock';

type CounterSettingsPropsType = {

}


const CounterSettings =(props: CounterSettingsPropsType) => {
    return (
        <div className='mainContainer'>
            <div className='valueContainer'>
                <SettingsBlock />
                <SettingsBlock />
            </div>
            <div className='buttonContainer'>
                <CustomButton />
            </div>

        </div>

    )
}

export default CounterSettings
