import React from "react";
import './LoginForm.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
import { MdErrorOutline } from "react-icons/md";
import withStyles from "@material-ui/core/styles/withStyles";

const StyledButton = withStyles({
    root: {
        background: '#00568F',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '#00568F',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

const LoginForm:React.FC = () => {
    const { register, handleSubmit,errors } = useForm();
    const onSubmit = (data:any) => console.log(data);
    console.log(errors)

    return(
        <div className="LoginForm-wrapper">
            <h3>Сделайте первый шаг к починке автомобиля</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="Input-wrapper">
                <div>
                        <TextField
                            name="name"
                            id="outlined-textarea"
                            label="Имя"
                            placeholder="Ваше имя"
                            multiline
                            variant="outlined"
                            fullWidth
                            inputRef={register({ required: true, maxLength: 20 })}
                            error={!!errors.name}
                        />
                    {errors.name && <p className="Error"><MdErrorOutline/>{" "}Имя обязательное поле</p>}
                </div>
                <div>
                    <TextField
                        name="phoneNumber"
                        id="outlined-textarea"
                        label="Телефон"
                        placeholder="Ваш номер"
                        multiline
                        variant="outlined"
                        fullWidth
                        inputRef={register({ required: true,pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g })}
                        error={!!errors.phoneNumber}
                    />
                    {errors.phoneNumber && <p className="Error"><MdErrorOutline/>{" "}Телефон обязательное поле</p>}
                </div>
                <div>
                    <TextField
                        name="car"
                        id="outlined-textarea"
                        label="Автомобиль"
                        placeholder="Ваш автомобиль"
                        multiline
                        variant="outlined"
                        fullWidth
                        inputRef={register({ required: true, maxLength: 99 })}
                        error={!!errors.car}
                    />
                    {errors.car && <p className="Error"><MdErrorOutline/>{" "}Автомобиль обязательное поле</p>}
                </div>
                <div>
                    <StyledButton
                        variant="contained"
                        color="primary"
                        fullWidth
                        type="submit"
                        className="Button"
                    >
                        Отправить заявку
                    </StyledButton>
                </div>
            </form>
        </div>
    );
};


export default LoginForm;