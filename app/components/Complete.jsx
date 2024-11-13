"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from './Sidebar';

const Complete = () => {
    const router = useRouter();

    useEffect(() => {
        
        const timer = setTimeout(() => {
            router.push('/step6');
        }, 3000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className='container complete'>
            <Sidebar />
           
            <main className='thank-container'>
                <img src="/images/icon-thank-you.svg" className='thank__icon' alt='icon' />
                <h1 className='thank__title'>Thank you!</h1>
                <p className='light-gray-text'>
                    Thank you for confirming your subscription!
                    We hope you have fun using our platform. You will receive an email receipt shortly.
                </p>
            </main>
        </div>
    );
}

export default Complete;