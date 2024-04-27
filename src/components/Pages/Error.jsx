import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    return (
        <div className=' flex flex-col items-center justify-center gap-5'>
                <p className=' text-[12rem] text-center font-semibold text-red-900'  >Error</p>
                <i className=' text-4xl'>{error.status}</i>
                <button className=' text-white px-3 py-2 bg-red-500 border-none' onClick={()=> navigate(-1)}>Go Back</button>
               
            
        </div>
    );
};

export default Error;