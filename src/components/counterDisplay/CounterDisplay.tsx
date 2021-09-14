import React, {useEffect, useState} from 'react';
import '../../App.css';
import s from './CounterDisplay.module.css'
import CustomButton from '../customButton/CustomButton';
import { useDispatch } from "react-redux";
import {IncValueActionCreator, ResetValueActionCreator} from '../../bll/counter-reducer';

type CounterDisplayPropsType = {
    value: number
    // incHandler: () => void
    // resetHandler: () => void
    startValue: number
    maxValue: number
    isMessage: boolean
    isError: boolean
}

const CounterDisplay = (props: CounterDisplayPropsType) => {
    const dispatch = useDispatch()

    let [incButtonDisabled, setIncButtonDisabled] = useState(false)
    let [resetButtonDisabled, setResetButtonDisabled] = useState(false)
    let [valueClass, setValueClass] = useState('')

    useEffect( () => {
        if(props.isMessage) {
            setIncButtonDisabled(true)
            setResetButtonDisabled(true)
        } else if (props.value === props.startValue) {
            setIncButtonDisabled(false)
            setResetButtonDisabled(true)
        } else if (props.maxValue === props.value) {
            setIncButtonDisabled(true)
            setResetButtonDisabled(false)
        } else {
            setIncButtonDisabled(false)
            setResetButtonDisabled(false)
        }
    }, [props.isMessage, props.value, props.maxValue, props.startValue])

    let messageText = (props.isError) ? 'incorrect value!!!' : 'enter values and press set'

    useEffect (() => {
        if (props.isError || (props.maxValue === props.value && !props.isMessage)) {
            setValueClass(s.redValueClass)
        } else {
            setValueClass('')
        }
    })

    const incButtonHandler = () => {
        const action = IncValueActionCreator(props.value)
        dispatch(action)
    }

    const resetButteonHandler = () => {
        const action = ResetValueActionCreator(props.value)
        dispatch(action)
    }

    return (
        <div className="mainContainer">
            <div className="valueContainer">
                <h3 className={`${s.value} ${valueClass}`}>
                    {props.isMessage ? messageText : props.value}</h3>
                {/*valueCLass*/}
            </div>
            <div className="buttonContainer">
                <CustomButton title={'inc'} onClick={incButtonHandler} disabled={incButtonDisabled}/>
                <CustomButton title={'reset'} onClick={resetButteonHandler} disabled={resetButtonDisabled}/>
            </div>

        </div>
    )
}

export default CounterDisplay;
