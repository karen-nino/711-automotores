import React from 'react'
import Image from 'next/image'


const InicioSesion = () => {
    return (
        <div className='h-screen overflow-hidden'>

            <div className='flex justify-between py-5 bg-sky-700'>
                <div className='w-[230px] flex justify-center items-center'>
                    <div className='flex items-center justify-center'>
                        <Image src="/assets/711-logo.png" width={200} height={100} />
                    </div>
                </div>
            </div>

            <section className='flex flex-col items-center justify-center pb-40 mt-20'>

                <p className='text-2xl font-light text-blue-400'>Inicia sesión</p>

                <div className='flex flex-col mt-10'>
                    <div className='mb-5 w-96'>
                        {/* <label for="nombre" class="block mb-2 text-sm font-semibold text-gray-700">Correo electrónico</label> */}
                        <input type="text" placeholder="Correo electrónico" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>
                    
                    <div className='mb-5 w-96'>
                        {/* <label for="nombre" class="block mb-2 text-sm font-semibold text-gray-700">Contraseña</label> */}
                        <input type="text" placeholder="Contraseña" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>

                    <a className='self-end block py-3 text-xs tracking-wide text-white bg-green-500 border border-b border-gray-300 rounded cursor-pointer item w-44 text-gray active:bg-green-700'>
                        <div className='flex justify-center'>
                            <span className='text-center'>Inicia sesión</span>
                        </div>
                    </a>


                    <div className='flex flex-col w-full mt-5'>
                        <a href='#' className='mb-2 text-sm text-blue-600 cursor-pointer active:text-blue-800'>Crear una nueva cuenta</a>
                        <a href='#' className='text-sm text-blue-600 cursor-pointer active:text-blue-800'>Olvidé mi contraseña</a>
                    </div>

                </div>

            </section>

            <div className='w-screen h-screen overflow-hidden bg-gray-700'></div>

        </div>
    )
}

export default InicioSesion