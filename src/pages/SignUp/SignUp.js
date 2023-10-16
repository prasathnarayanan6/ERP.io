import React from "react";
import "./signup.css";
import doc from '../../assets/Img/office.jpg';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    return (
        <section>
        <div className="register">
            <div className="col-1">
                <h2>Login In</h2>
                <span>All in One Platform</span>
                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='username' />
                    <input type="password" {...register("password")} placeholder='password' />
                    <button className='btn'>Login In</button>
                </form>
            </div>
            <div className="col-2">
                <img src={doc} alt="" />
            </div>
        </div>
    </section>
    );
};
export default SignUp;