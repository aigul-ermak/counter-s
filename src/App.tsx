import React, {useEffect, useState} from 'react';
import './App.css';
import CounterDisplay from './components/counterDisplay/CounterDisplay';
import CounterSettings from './components/counterSettings/CounterSettings';
import {AppRootState} from './bll/store';
import {useSelector} from 'react-redux';

function App() {
    const value = useSelector<AppRootState, number>(state => state.counter.value)

    let [startValue, setStartValue] = useState(0);
    let [maxValue, setMaxValue] = useState(5);

    // let [value, setValue] = useState<number>(startValue);

    let [isMessage, setIsMessage] = useState(false);
    //показывать или нет сообщение
    let [isError, setIsError] = useState(true);
    //есть ли ошибка

    const setValuesHandler = () => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        setIsMessage(false)
    }

    // const incHandler = () => {
    //     if (value < maxValue) {
    //         setValue(value + 1)
    //     }
    // }
    //
    // const resetHandler = () => {
    //     setValue(startValue)
    // }

    const maxValueHandler = (value: number) => {
        setIsMessage(true)
        setMaxValue(value)
    }
    const startValueHandler = (value: number) => {
        setIsMessage(true)
        setStartValue(value)
    }
    //error
    useEffect(() => {
        let error = (maxValue <= startValue || startValue < 0)
        setIsError(error)
    }, [startValue, maxValue])

    return (
        <div className="App">
            <CounterSettings
                maxValue={maxValue}
                startValue={startValue}
                setValuesHandler={setValuesHandler}
                isMessage={isMessage}
                maxValueHandler={maxValueHandler}
                startValueHandler={startValueHandler}/>
            <CounterDisplay
                value={value}
                isMessage={isMessage}
                maxValue={maxValue}
                startValue={startValue}
                isError={isError}
            />
        </div>
    );
}

export default App;
