import React from 'react'

const Contact = () => {
    return (
        <div name="contact" className="w-full h-full bg-[#0a192f] flex justify-center items-center p-4 ">
            <form method='POST' action="https://getform.io/f/pbnrvdlb" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8 mt-[50%] '>
                    <p className='font-bold inline border-pink-600 text-gray-300'>Contact </p>
                    <p className='text-gray-300 py-4'>Submit the from below or shoot me an email - MyEmail : riazanus568@gmail.com</p>

                </div>
                <input className='bg-[#ccd5f6] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd5f6]' type="email" placeholder='Email' name='Email' />
                <textarea className='bg-[#ccd5f6] p-2' name="Message"  rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex
                items-center'>let's Collaborate </button>
            </form>


        </div>
    )
}

export default Contact
