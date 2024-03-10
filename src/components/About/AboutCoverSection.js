import Image from 'next/image'
import React from 'react'
import profileCharacter from "../../../public/character.png"

const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
        <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center'> 
            <Image src={profileCharacter} alt="Instill Learning" 
            className='w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center'
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
            />
        </div>

        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
            <h2 className='font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left'>
            Dream Big, Work Hard, Achieve More!
            </h2>
            <p className='font-medium capitalize mt-4 text-base'>
            Instill Learning is a premier online training platform, offering a wide range of courses and services designed to cater to the evolving needs of individuals and organizations worldwide. Our offerings include comprehensive online courses in key sectors such as business, healthcare, education, and IT. We also provide personalized career counseling, hands-on internship opportunities, specialized corporate training programs, and the latest certification training in cutting-edge technologies like Blockchain, Cloud Technologies, Mobile Application Development, and more. Our industry-leading certification programs cover technologies including Hyperledger Fabric, Ethereum, Corda, Oracle Blockchain, Microsoft Azure, Google Cloud, Android, Kotlin, iOS, Swift, React Native, Flutter, as well as advanced fields like Machine Learning and Artificial Intelligence. At Instill Learning Institute, we're committed to empowering professionals and organizations by providing top-notch education, extensive practical experience, and globally recognized certifications. Choose us to stay ahead in your career and ensure your team is updated with the latest technological advancements.
            </p>
        </div>
    </section>
  )
}

export default AboutCoverSection