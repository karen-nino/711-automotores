import React from 'react'
import { Topbar, Sidebar } from '@/app/layouts/dashboard'
import Link from 'next/link'

const NuevoCliente = () => {
  return (
    <div className='flex flex-col'>

      <div className="grid h-screen grid-cols-[230px,1fr,1fr,1fr,1fr,1fr] grid-rows-[1fr,1fr] overflow-hidden">

        <section className="col-span-6">
          <Topbar />
        </section>

        <section className="col-span-1 row-start-2">
          <Sidebar />
        </section>

        <section className="col-span-5 row-start-2">
          <div className='h-screen overflow-auto bg-gray-200'>

            <article className='flex items-center pl-6 text-base text-white bg-gray-700 h-14'>
              <Link href="./clientes" className='mr-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='cursor-pointer fill-white hover:fill-gray-400'>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15 20L7 12L15 4L17 6L11 12L17 18L15 20Z" />
                </svg>
              </Link>
              <span>Nuevo cliente</span>
            </article>

            <section className='h-32 mt-10 ml-5 mb-44 w-96'>

              <div className='mb-5'>
                <label for="nombre" class="block mb-2 text-sm font-semibold text-gray-700">Nombre</label>
                <input type="text" placeholder="Nombre(s) del cliente" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>

              <div className='mb-5'>
                <label for="nombre" class="block mb-2 text-sm font-semibold text-gray-700">Apellidos</label>
                <input type="text" placeholder="Apellidos del cliente" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>

              <div className='mb-5'>
                <label for="nombre" class="block mb-2 text-sm font-semibold text-gray-700">Fecha de nacimiento</label>
                <input type="text" placeholder="Fecha de nacimiento" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>

              <div className='mb-5'>
                <label for="nombre" class="block mb-2 text-sm font-semibold text-gray-700">Correo electrónico</label>
                <input type="text" placeholder="correo@ejemplo.com" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>

              <div className='mb-5'>
                <label for="nombre" class="block mb-2 text-sm font-semibold text-gray-700">Teléfono</label>
                <input type="text" placeholder="5 (555) 555-5555" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>

              <div className='mb-5'>
                <label for="nombre" class="block mb-2 text-sm font-semibold text-gray-700">Teléfono de referencia 1</label>
                <input type="text" placeholder="5 (555) 555-5555" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>

              <div className='mb-5'>
                <label for="nombre" class="block mb-2 text-sm font-semibold text-gray-700">Teléfono de referencia 2</label>
                <input type="text" placeholder="5 (555) 555-5555" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>

              <div className='mb-5'>
                <label for="nombre" class="block mb-2 text-sm font-semibold text-gray-700">Teléfono de referencia 3</label>
                <input type="text" placeholder="5 (555) 555-5555" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>

              <div className='mb-5'>
                <label for="nombre" class="block mb-2 text-sm font-semibold text-gray-700">Domicilio</label>
                <input type="text" placeholder="Calle, número, colonia" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>

              <div className='mb-5'>
                <label for="nombre" class="block mb-2 text-sm font-semibold text-gray-700">Código postal</label>
                <input type="text" placeholder="Código postal" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>

              <div className='mb-5'>
                <label for="nombre" class="block mb-2 text-sm font-semibold text-gray-700">Ciudad</label>
                <input type="text" placeholder="Ciudad y estado/provincia" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>

              <div className='mb-5'>
                <label for="identificacion" class="block mb-2 text-sm font-medium text-gray-700">ID</label>
                <select id="identificacion" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  <option selected>Selecciona</option>
                  <option value="ID">Número de identificación oficial</option>
                </select>
              </div>

              <div className='mb-5'>
                <label for="nombre" class="block mb-2 text-sm font-semibold text-gray-700">Cotitular</label>
                <input type="text" placeholder="Escribe para buscar un cliente registrado" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>

              <div className='mb-5'>
                <label for="identificacion-documento" class="block mb-2 text-sm font-semibold text-gray-700">Identificación oficial</label>
                <a className='block px-5 py-3 text-xs tracking-wide text-gray-600 bg-white border border-b border-gray-300 rounded cursor-pointer text-gray active:bg-gray-300 w-44'>
                  <div className='flex justify-center'>
                    <span className='text-center'>Agregar documentos</span>
                  </div>
                </a>
              </div>

              <div className='mb-5'>
                <label for="documentos" class="block mb-2 text-sm font-semibold text-gray-700">Documentos</label>
                <a className='block px-5 py-3 text-xs tracking-wide text-gray-600 bg-white border border-b border-gray-300 rounded cursor-pointer text-gray active:bg-gray-300 w-44'>
                  <div className='flex justify-center'>
                    <span className='text-center'>Agregar documentos</span>
                  </div>
                </a>
              </div>

              <div className='mb-64'>
                <label for="fotografias" class="block mb-2 text-sm font-semibold text-gray-700">Fotografías</label>
                <a className='block px-5 py-3 text-xs tracking-wide text-gray-600 bg-white border border-b border-gray-300 rounded cursor-pointer text-gray active:bg-gray-300 w-44'>
                  <div className='flex justify-center'>
                    <span className='text-center'>Agregar foto</span>
                  </div>
                </a>
              </div>


            </section>

          </div>
        </section>

      </div>

    </div>
  )
}

export default NuevoCliente