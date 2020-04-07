import React from "react";
import './LoginForm.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const LoginForm:React.FC = () => {
    return(
        <div className="LoginForm-wrapper">
            <h3>Сделайте первый шаг к починке автомобиля</h3>
            <div className="Input-wrapper">
                <TextField
                    id="outlined-textarea"
                    label="Имя"
                    placeholder="Pls type your name"
                    multiline
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    id="outlined-textarea"
                    label="Телефон"
                    placeholder="Pls type your phone"
                    multiline
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    id="outlined-textarea"
                    label="Автомобиль"
                    placeholder="Pls type your car"
                    multiline
                    variant="outlined"
                    fullWidth
                />
                <Button variant="contained" color="primary" fullWidth>
                    Button
                </Button>
            </div>
        </div>
    );
};


export default LoginForm;