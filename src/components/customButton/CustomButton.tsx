import React from 'react';
import '../../App.css';
import s from './CustomButton.module.css'

type CustomButtonPropsType = {

}


const CustomButton = (props: CustomButtonPropsType) => {
    return (
        <div>
            <button
                className={s.button}/>
        </div>
    )
}

export default CustomButton;
