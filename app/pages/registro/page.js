
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Registro = () => {
    return (
        <div>

            <div className='flex justify-between py-5 bg-sky-700'>
                <div className='w-[230px] flex justify-center items-center'>
                    <div className='flex items-center justify-center'>
                        <Image src="/assets/711-logo.png" width={200} height={100} />
                    </div>
                </div>
            </div>

            <section className='flex flex-col items-center justify-center mt-20'>

                <p className='text-2xl font-light text-blue-400'>Regístrate</p>
                <p className='text-2xl font-light text-gray-500'>Crea una cuenta para comenzar</p>

                <div className='flex flex-col mt-10'>
                    <div className='mb-5'>
                        <input type="text" placeholder="Nombre de tu negocio" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>

                    <div className='mb-5'>
                        <input type="text" placeholder="Tu nombre completo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>

                    <div className='mb-5 '>
                        <input type="text" placeholder="Correo electrónico" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>

                    <div className='mb-5 '>
                        <input type="text" placeholder="Contraseña" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>

                    <div className='mb-5'>
                        <input type="text" placeholder="Confirmar contraseña" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>

                    <p className='text-sm text-gray-700'>Al registrate, usted confirma que ha leído y acepta nuestros <span><Link href="/" className='text-blue-500'>Términos y condiciones</Link></span></p>

                    <Link href="#" className='self-end block py-3 mt-5 text-xs tracking-wide text-white bg-green-500 border border-b border-gray-300 rounded cursor-pointer item w-44 text-gray active:bg-green-700'>
                        <div className='flex justify-center'>
                            <span className='text-center'>Regístrate</span>
                        </div>
                    </Link>

                    <div className='flex flex-col w-full mt-5'>
                        <Link href='../pages/inicio-sesion' className='mb-2 text-sm text-blue-600 cursor-pointer active:text-blue-800'>Inicia sesión</Link>
                    </div>

                </div>

            </section>


        </div>
    )
}

export default Registro