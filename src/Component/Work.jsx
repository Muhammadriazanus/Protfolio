import React from 'react'

const Work = () => {
    return (
        <div name="work" className='bg-[#0a192f] text-gray-300 w-full h-screen sm:bg-[#0a192f]'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='text-4xl font-bold inline border-b-4 border-pink-600  py-4 '>
                    <p className='md:text-2xl '>Work</p>
                    <p className='py-4 md:text-2xl'>These are technologies I've work with</p>
                </div>
                <div>
                    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-50 mx-auto' src="https://tse1.mm.bing.net/th?id=OIP.RvQpa4cMHNJ4VwygjvhluQHaDn&pid=Api&P=0&h=220" alt="html" />
                            {/* <p className='py-4'>HTML</p> */}
                            <button className='mt-9'><a className='px-4' href="https://recipe-app-hd4y.vercel.app/">Reacipe App</a></button>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-[300px] h-[100px] mx-auto' src="https://cdn-icons-png.flaticon.com/512/3845/3845731.png" alt="weather app" />
                            {/* <p className='py-4'>CSS</p> */}
                            <button className='mt-9'><a href="https://weather-app-react-js-5ab3.vercel.app">Weather App</a></button>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-[300px] mx-auto h-[100px]' src="https://tse4.mm.bing.net/th?id=OIP.nwDpe9OL-HcOY9HDrLys8AHaFr&pid=Api&P=0&h=220" alt="html" />
                            {/* <p className='py-4'>JAVASCRIPT</p> */}
                            <button className='mt-9'><a href="https://ecommerce-cyan-five.vercel.app">E Commerce</a></button>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-[300px] h-[100px] mx-auto' src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="html" />
                            {/* <p className='py-4'>REACT JS</p> */}
                            <button className='mt-9'><a href="https://netflix-clone-x81o.vercel.app/">Netflix App</a></button>

                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-[300px] mx-auto h-[100px]'  src="https://tse2.mm.bing.net/th?id=OIP.6QTSZNxNredTYB0NdUZBHgHaEK&pid=Api&P=0&h=220" alt="html" />
                            {/* <p className='py-4'>TAILWIND CSS</p> */}
                            <button className='mt-9'><a href="https://github.com/Muhammadriazanus/youtube-clone-rest-api.git">Rest Api Youtube clone</a></button>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-[300px] h-[100px] mx-auto' src="https://tse2.mm.bing.net/th?id=OIP.6QTSZNxNredTYB0NdUZBHgHaEK&pid=Api&P=0&h=220" alt="html" />
                            {/* <p className='py-4'>NODE JS</p> */}
                            <button className='mt-9'><a href="https://github.com/Muhammadriazanus/rest-api-for-back-end.git">Rest Api Socail media clone</a></button>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-[300px] h-[100px] mx-auto' src="https://wallpapercave.com/wp/wp9133427.jpg" alt="html" />
                            {/* <p className='py-4'>MONGO DB</p> */}
                            <button className='mt-9'><a href="https://github.com/Muhammadriazanus/youtubeCloneMernstack.git">Youtube Clone</a></button>

                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-[300px] h-[100px] mx-auto' src="https://tse1.mm.bing.net/th?id=OIP.2Yic55-kv8phT6ejZISLDgHaEK&pid=Api&P=0&h=220" alt="html" />
                            {/* <p className='py-4'>GITHUB</p> */}
                            <button className='mt-9'><a href="https://muhammadriazanus.github.io/to-do-list-app/">To do list</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Work
