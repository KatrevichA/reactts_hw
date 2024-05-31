import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {AuthDataModel} from "../models/AuthDataModel";


const FormComponent = () => {

   const {
       handleSubmit,
       register
   } = useForm<AuthDataModel>({defaultValues: {username:'userAA', password:'D@&&user4'}});

   const authenticate = async (formData:AuthDataModel) => {
     const isAuth = await authService. authentication(formData);
     setIsAuthState(isAuth);
   }

    const [isAuthState, setIsAuthState] = useState<boolean>(false)

    return (
        <div>
            <h2>Login Form</h2>
            <div>
                {
                    isAuthState ? <span>ok</span> : <span>no ok</span>
                }
            </div>

            <form onSubmit={handleSubmit(authenticate)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
            </form>

        </div>
    );
};

export default FormComponent;