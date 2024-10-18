import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
    return (
        <div name='about' className='w-full pb-[300px] bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col  items-center w-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            ABOUT
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>With over 3+ years of hands-on experience in driving customer acquisition and revenue growth through digital advertising, 
                            I have honed my skills in leveraging the power of Google and Meta platforms. 
                            My analytical approach and continuous optimization strategies have consistently improved campaign performance, 
                            leading to significant ROI increases for my clients.best digital marketing freelancer In kerala.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
