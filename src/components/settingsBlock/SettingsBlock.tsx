import React, {ChangeEvent} from 'react';
import '../../App.css';
import s from './SettingsBlock.module.css'

type SettingsBlockPropsType = {
    onClick: () => void
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    title: string

}


const SettingsBlock = (props: SettingsBlockPropsType) => {
    return (
        <div>
            <span>{props.title}</span>
            <input type="number"
                   onClick={props.onClick}
                   value={props.value}
                   onChange={props.onChange}/>
        </div>
    )
}

export default SettingsBlock;
