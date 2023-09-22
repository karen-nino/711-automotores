import React from 'react'
import { Topbar, Sidebar } from '@/app/layouts/dashboard'


const NuevoCliente = () => {
  return (
    <div className='flex flex-col'>

      <div className="grid h-screen grid-cols-[230px,1fr,1fr,1fr,1fr,1fr] grid-rows-[1fr,1fr]">

        <section className="col-span-6">
          <Topbar />
        </section>

        <section className="col-span-1 row-start-2">
          <Sidebar />
        </section>

        <section className="col-span-5 row-start-2">
          <div className='min-h-screen bg-gray-200'>

            <article className='flex items-center pl-6 text-base text-white bg-gray-700 h-14'>
              <div className='mr-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                  <g clip-path="url(#clip0_43_969)">
                    <path d="M11.6667 11.5846C11.6667 12.247 11.4768 12.8151 11.097 13.2891C10.7172 13.763 10.26 14 9.72526 14H1.94141C1.40668 14 0.949436 13.763 0.569661 13.2891C0.189887 12.8151 0 12.247 0 11.5846C0 11.0681 0.0258247 10.5805 0.077474 10.1217C0.129123 9.66298 0.224826 9.20117 0.364583 8.73633C0.50434 8.27148 0.682075 7.87348 0.897786 7.54232C1.1135 7.21115 1.39909 6.94075 1.75456 6.73112C2.11003 6.52148 2.51866 6.41667 2.98047 6.41667C3.77648 7.19444 4.72743 7.58333 5.83333 7.58333C6.93924 7.58333 7.89019 7.19444 8.6862 6.41667C9.148 6.41667 9.55664 6.52148 9.91211 6.73112C10.2676 6.94075 10.5532 7.21115 10.7689 7.54232C10.9846 7.87348 11.1623 8.27148 11.3021 8.73633C11.4418 9.20117 11.5375 9.66298 11.5892 10.1217C11.6408 10.5805 11.6667 11.0681 11.6667 11.5846ZM9.33333 3.5C9.33333 4.46615 8.99154 5.29102 8.30794 5.97461C7.62435 6.6582 6.79948 7 5.83333 7C4.86719 7 4.04232 6.6582 3.35872 5.97461C2.67513 5.29102 2.33333 4.46615 2.33333 3.5C2.33333 2.53385 2.67513 1.70898 3.35872 1.02539C4.04232 0.341797 4.86719 0 5.83333 0C6.79948 0 7.62435 0.341797 8.30794 1.02539C8.99154 1.70898 9.33333 2.53385 9.33333 3.5Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_43_969">
                      <rect width="11.6667" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span>Nuevo cliente</span>
            </article>

            <section className='h-32 mt-10 ml-5 w-96'>

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

              <div className='mb-5'>
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