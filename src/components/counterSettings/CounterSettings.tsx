import React, {ChangeEvent} from 'react';
import '../../App.css';
import s from './CounterSettings.module.css'

import CustomButton from '../customButton/CustomButton';
import SettingsBlock from '../settingsBlock/SettingsBlock';

type CounterSettingsPropsType = {
    maxValue: number
    startValue: number
    setValuesHandler: () => void
    isMessage: boolean
    maxValueHandler: (value: number) => void
    startValueHandler: (value: number) => void


}


const CounterSettings = (props: CounterSettingsPropsType) => {
    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.maxValueHandler(e.currentTarget.valueAsNumber)
    }
    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.startValueHandler(e.currentTarget.valueAsNumber)
    }

    return (
        <div className="mainContainer">
            <div className="valueContainer">
                <SettingsBlock title={'max value:'}
                               onClick={props.setValuesHandler}
                               value={props.maxValue}
                               onChange={onChangeMaxHandler}/>
                <SettingsBlock title={'start value'}
                               onClick={props.setValuesHandler}
                               value={props.startValue}
                               onChange={onChangeStartHandler}/>
            </div>
            <div className="buttonContainer">
                <CustomButton title={'set'}/>
            </div>

        </div>

    )
}

export default CounterSettings
