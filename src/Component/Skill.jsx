import React from 'react'

const Skill = () => {
    return (
        <div name="Skills" className= 'bg-[#0a192f] text-gray-300 w-full h-screen'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='text-4xl font-bold inline border-b-4 border-pink-600  py-4 '>
                    <p>Skills</p>
                    <p className='py-4'>These are technologies I've work with</p>
                </div>
                <div>
                    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src="https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/html.png?raw=true" alt="html" />
                            <p className='py-4'>HTML</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src="https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/css.png?raw=true" alt="html" />
                            <p className='py-4'>CSS</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src="https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/javascript.png?raw=true" alt="html" />
                            <p className='py-4'>JAVASCRIPT</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src="https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/react.png?raw=true" alt="html" />
                            <p className='py-4'>REACT JS</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src="https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/tailwind.png?raw=true" alt="html" />
                            <p className='py-4'>TAILWIND CSS</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src="https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/node.png?raw=true" alt="html" />
                            <p className='py-4'>NODE JS</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src="https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/mongo.png?raw=true" alt="html" />
                            <p className='py-4'>MONGO DB</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src="https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/github.png?raw=true" alt="html" />
                            <p className='py-4'>GITHUB</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill
