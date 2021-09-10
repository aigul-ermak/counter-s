import React from 'react';
import '../../App.css';
import s from './SettingsBlock.module.css'



type SettingsBlockPropsType = {}


const SettingsBlock = (props: SettingsBlockPropsType) => {
    return (
        <div>
            <span>Max value:</span>
            <input type="number"/>
        </div>
    )
}

export default SettingsBlock;
