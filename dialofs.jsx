import React from 'react'
import s from './Dialogs.module.css'
import {BrowserRouter} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div ClassName={s.dialog}>
                <div>Alexandr</div>
                <div>Roma</div>
                <div>Kseina</div>
                <div>Kate</div>
            </div>
            <div className={s.message}>
                <div>Hi</div>
                <div>My name is...</div>
                <div>How old are you?</div>
				<div>New message</div>
            </div>
        </div>
    );
}

export default Dialogs