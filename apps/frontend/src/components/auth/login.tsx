"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import {useFetch} from "@gitroom/helpers/utils/custom.fetch";
import Link from "next/link";

type Inputs = {
    email: string;
    password: string;
}

export function Login() {
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();

    const fetchData = useFetch();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        fetchData('/auth/login', {
            method: 'POST',
            body: JSON.stringify({...data, provider: 'LOCAL'})
        });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h1 className="text-3xl font-bold text-left mb-4 cursor-pointer">Create An Account</h1>
            </div>
            <div className="space-y-4 text-black">
                <input {...register('email')} type="email" placeholder="Email Addres" className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500"/>
                <input {...register('password')} autoComplete="off" type="password" placeholder="Password" className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500"/>
            </div>
            <div className="text-center mt-6">
                <button type="submit" className="w-full py-2 text-xl text-white bg-purple-400 rounded-lg hover:bg-purple-500 transition-all">Sign in</button>
                <p className="mt-4 text-sm">Don{"'"}t Have An Account? <Link href="/auth" className="underline cursor-pointer"> Sign Up</Link></p>
            </div>
        </form>
    );
}