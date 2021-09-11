import React from 'react';
import '../../App.css';
import s from './CustomButton.module.css'

type CustomButtonPropsType = {
    title: string
    onClick?: () => void
    disabled?: boolean
}


const CustomButton = (props: CustomButtonPropsType) => {
    return (
        <div>
            <button
                className={s.button}
                onClick={props.onClick}
                disabled={props.disabled}>
                {props.title}


            </button>
        </div>
    )
}

export default CustomButton;
