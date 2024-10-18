import React from 'react'

import googleads from '../assets/google-ads.png';
import meta from '../assets/meta.png';
import SEO from '../assets/SEO.png';
import ReactImg from '../assets/react.png';
import tag from '../assets/tag.png';
import EXCEL from '../assets/excel1.png';
import Pyanywhere from '../assets/dv.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mysql from '../assets/analyt.png';
import Django from '../assets/clarity.png';
import Bootstrap from '../assets/S1.png';

const Skills = () => {
  return (
    <div name='skills' id='skills1' className=' w-full h-auto text-gray-300 bg-[#0a192f]'>
        {/* container */}
        <div className='max-w-[900px] mx-auto p-4 flex flex-col  w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline  border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

                <div className='shadow-md shadow-[#3d7077] hover:scale-110 duration-500 mb-3'>
                    <img className='w-20 mx-auto' src={googleads} alt="html icon" />
                    <p className='my-4'>Google Ads</p>

                </div>
                <div className='shadow-md shadow-[#3d7077] hover:scale-110 duration-500 mb-3'>
                    <img className='w-20 mx-auto' src={meta} alt="best digital marketing FREELANCER IN KERALA" />
                    <p className='my-4'>Meta Ads</p>

                </div>
                <div className='shadow-md shadow-[#3d7077] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mysql} alt="best digital marketing FREELANCER IN KERALA" />
                    <p className='my-4'>Google Analytics</p>

                </div>
                <div className='shadow-md shadow-[#3d7077] hover:scale-110 duration-500 mb-3'>
                    <img className='w-20 mx-auto' src={tag} alt="best digital marketing FREELANCER IN KERALA"   />
                    <p className='my-4'>Tag Manager</p>

                </div>
                <div className='shadow-md shadow-[#3d7077] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Pyanywhere} alt="best digital marketing FREELANCER IN KERALA" />
                    <p className='my-4'>DV360</p>

                </div>
                <div className='shadow-md shadow-[#3d7077] hover:scale-110 duration-500 mb-3'>
                    <img className='w-20 mx-auto' src={Django} alt="best digital marketing FREELANCER IN KERALA" />
                    <p className='my-4'>Microsoft Clarity</p>

                </div>

                <div className='shadow-md shadow-[#3d7077] hover:scale-110 duration-500 mb-3'>
                    <img className='w-20 mx-auto' src={SEO} alt="best digital marketing FREELANCER IN KERALA" />
                    <p className='my-4'>Email Marketing</p>

                </div>
               
                <div className='shadow-md shadow-[#3d7077] hover:scale-110 duration-500 mb-3'>
                    <img className='w-20 mx-auto' src={Bootstrap} alt="best digital marketing FREELANCER IN KERALA" />
                    <p className='my-4'>SEO</p>

                </div>
                <div className='shadow-md shadow-[#3d7077] hover:scale-110 duration-500 mb-3'>
                    <img className='w-20 mx-auto' src={EXCEL} alt="best digital marketing FREELANCER IN KERALA" />
                    <p className='my-4'>EXCEL</p>

                </div>
                <div className='shadow-md shadow-[#3d7077] hover:scale-110 duration-500 mb-3'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="best digital marketing FREELANCER IN KERALA" />
                    <p className='my-4'>REACT JS</p>

                </div>
                
                <div className='shadow-md shadow-[#3d7077] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="best digital marketing FREELANCER IN KERALA" />
                    <p className='my-4'>GITHUB</p>

                </div>
                <div className='shadow-md shadow-[#3d7077] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="best digital marketing FREELANCER IN KERALA" />
                    <p className='my-4'>THAILWIND CSS</p>

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Skills
