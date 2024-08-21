//home
import React from 'react';
import { Link } from 'react-router-dom';
export default function Home() {
    return (
        <section>
            <div className='grid grid-cols-2'>
                <div className='flex justify-center'>
                    <div className='flex flex-col justify-center items-start'>
                        <h1 className='text-4xl font-bold'>Landing page for your online service</h1>
                        <p className='text-lg text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro sapiente velit blanditiis eligendi reprehenderit nihil mollitia aliquid necessitatibus sequi natus?</p>
                        <Link to="/contact" className='bg-green-700 text-white px-4 py-2 mt-4 rounded-md'>Learn more</Link>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img src="src\assets\Gambar\hero-illustration.png" alt="Neuverse" />
                </div>
            </div>
        </section>
    )
}