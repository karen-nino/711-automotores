import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const RecuperarContrasena = () => {
  return (
    <div className='h-screen overflow-hidden'>

      <div className='flex justify-between py-5 bg-sky-700'>
        <div className='w-[230px] flex justify-center items-center'>
          <div className='flex items-center justify-center'>
            <Image src="/assets/711-logo.png" width={200} height={100} />
          </div>
        </div>
      </div>

      <section className='flex flex-col items-center mt-20'>

        <div className='flex flex-col'>

        <p className='self-start mb-3 text-xl font-light text-gray-500'>Olvidé mi contraseña</p>
        
          <div className='mb-5 w-96'>
            <input type="text" placeholder="Correo electrónico" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
          </div>


          <Link href="../auth/inicio-sesion" className='self-end block px-5 py-3 text-xs tracking-wide text-white bg-green-500 border border-b border-gray-300 rounded cursor-pointer item text-gray active:bg-green-700'>
            <div className='flex justify-center'>
              <span className='text-center'>Enviar correo de recuperación</span>
            </div>
          </Link>

          <div className='flex flex-col w-full mt-8'>
            <Link href="../auth/inicio-sesion" className='mb-2 text-sm text-blue-600 cursor-pointer active:text-blue-800'>Inicia sesión</Link>
            <p className='text-sm'>Si aún necesitas ayuda <span><Link href='#' className='mb-2 text-blue-600 cursor-pointer active:text-blue-800'>contáctanos</Link></span></p>
          </div>

        </div>

      </section>

      <div className='w-screen h-screen mt-40 bg-gray-700'></div>

    </div>
  )
}

export default RecuperarContrasena