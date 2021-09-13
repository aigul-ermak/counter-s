import React, {ChangeEvent} from 'react';
import '../../App.css';
import s from './SettingsBlock.module.css'

type SettingsBlockPropsType = {
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    title: string
    startValue: number
    maxValue: number
}


const SettingsBlock = (props: SettingsBlockPropsType) => {
    let errorSV = (props.startValue < 0 || props.maxValue < 0) ? s.error : '';
    let errorBoth = (props.startValue === props.maxValue) ? s.error : '';


    return (
        <div>
            <span>{props.title}</span>
            <input
                className={`${errorSV} ${errorBoth}`}
                type="number"
                value={props.value}
                onChange={props.onChange}/>
        </div>
    )
}

export default SettingsBlock;
