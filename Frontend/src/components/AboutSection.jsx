import React from 'react'
import Assets from '../assets/Assets'

const AboutSection = () => {
  return (
    <div>
        <div className='mb-[10rem] mt-3 w-full flex flex-row '>
            <div className='ml-3 w-[50%] relative overflow-hidden'>
            <img className='w-[1047px] h-[700px] absolute cursor-pointer object-cover transition-transform duration-700 ease-in-out transform hover:scale-105 ' src={Assets.about} alt="about image" />

            </div>
            <div className='px-4 mr-3 w-[50%] bg-[#fafafa]'>
                <h1 className='py-10 text-[24px] text-center font-bold'>OUR STORY</h1>
                <p className='px-3 text-[#3C3C3C] font-[18px] leading-9'>At "THE NOTE," our journey begins with a simple yet profound belief: Life is a symphony of moments, and each moment carries its unique note. We have made it our mission to capture these notes, bottle them, and present them to you in the form of exquisite fragrances. The name "THE NOTE" was carefully chosen because it represents the heart of our brand. Just as a musical note is a fundamental building block of a beautiful melody, each fragrance note is a vital element in the composition of our perfumes. These notes come together to create harmonious blends that resonate with your senses. In a world filled with noise, we believe in the power of a single note to whisper a thousand words. Each "THE NOTE" fragrance is a story, a verse, a memory bottled for your senses. Join us on this fragrant adventure and let "THE NOTE" become a part of your personal story. Explore our collection, find your unique note, and experience the magic of scent as it weaves its way into your life.</p>


            </div>

        </div>

    







      
    </div>
  )
}

export default AboutSection
