import React from 'react'
import { Topbar, Sidebar } from '@/app/layouts/dashboard'
import Link from 'next/link'

const Clientes = () => {
  return (
    <div className='flex flex-col'>

      <div className="grid h-screen grid-cols-[230px,1fr,1fr,1fr,1fr,1fr] grid-rows-[1fr,1fr] overflow-hidden">

        <section className="col-span-6">
          <Topbar />
        </section>

        <section className="col-span-1 row-start-2">
          <Sidebar />
        </section>

        <section className="col-span-5 row-start-2 select-none">
          <div className='h-screen bg-gray-200'>

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
              <span>Clientes</span>

              <Link href="./nuevo-cliente" className='absolute flex items-center justify-center w-16 h-16 bg-red-500 rounded-full right-20 top-20'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 25 28" fill="none">
                  <g clip-path="url(#clip0_345_3116)">
                    <path d="M22.75 11.375H14.875V3.5C14.875 2.53367 14.0913 1.75 13.125 1.75H11.375C10.4087 1.75 9.625 2.53367 9.625 3.5V11.375H1.75C0.783672 11.375 0 12.1587 0 13.125V14.875C0 15.8413 0.783672 16.625 1.75 16.625H9.625V24.5C9.625 25.4663 10.4087 26.25 11.375 26.25H13.125C14.0913 26.25 14.875 25.4663 14.875 24.5V16.625H22.75C23.7163 16.625 24.5 15.8413 24.5 14.875V13.125C24.5 12.1587 23.7163 11.375 22.75 11.375Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_345_3116">
                      <rect width="24.5" height="28" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </article>

            <section className='p-6'>

              <div className='flex mb-4 border border-gray-300 bg-gray-50 w-96'>
                <input type="text" placeholder="Buscar" class="w-96  text-gray-900 text-sm rounded-md block p-2.5" />
                <a className='block px-3 py-3 text-xs tracking-wide text-gray-600 bg-white border-l border-gray-300 cursor-pointer text-gray active:bg-gray-300'>
                  <div className='flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_103_1505)">
                        <path d="M16.6154 10.1538C16.6154 8.375 15.9832 6.85337 14.7188 5.58894C13.4543 4.32452 11.9327 3.69231 10.1538 3.69231C8.375 3.69231 6.85337 4.32452 5.58894 5.58894C4.32452 6.85337 3.69231 8.375 3.69231 10.1538C3.69231 11.9327 4.32452 13.4543 5.58894 14.7188C6.85337 15.9832 8.375 16.6154 10.1538 16.6154C11.9327 16.6154 13.4543 15.9832 14.7188 14.7188C15.9832 13.4543 16.6154 11.9327 16.6154 10.1538ZM24 22.1538C24 22.6538 23.8173 23.0865 23.4519 23.4519C23.0865 23.8173 22.6538 24 22.1538 24C21.6346 24 21.2019 23.8173 20.8558 23.4519L15.9087 18.5192C14.1875 19.7115 12.2692 20.3077 10.1538 20.3077C8.77885 20.3077 7.46394 20.0409 6.20913 19.5072C4.95433 18.9736 3.8726 18.2524 2.96394 17.3438C2.05529 16.4351 1.33413 15.3534 0.800481 14.0986C0.266827 12.8438 0 11.5288 0 10.1538C0 8.77885 0.266827 7.46394 0.800481 6.20913C1.33413 4.95433 2.05529 3.8726 2.96394 2.96394C3.8726 2.05529 4.95433 1.33413 6.20913 0.800481C7.46394 0.266827 8.77885 0 10.1538 0C11.5288 0 12.8438 0.266827 14.0986 0.800481C15.3534 1.33413 16.4351 2.05529 17.3438 2.96394C18.2524 3.8726 18.9736 4.95433 19.5072 6.20913C20.0409 7.46394 20.3077 8.77885 20.3077 10.1538C20.3077 12.2692 19.7115 14.1875 18.5192 15.9087L23.4663 20.8558C23.8221 21.2115 24 21.6442 24 22.1538Z" fill="black" />
                      </g>
                      <defs>
                        <clipPath id="clip0_103_1505">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </a>
              </div>

              <h2 class="block text-sm font-semibold text-gray-700 mb-4">TODOS LOS CLIENTES</h2>

              <section className='grid w-8/12 gap-3 grid-cols-fluid'>

                <Link href="../pages/clientes/informacion-cliente" className='flex h-20 p-3 bg-white cursor-pointer'>

                  <div>
                    <div className='flex items-center justify-center bg-gray-300 rounded-full h-14 w-14'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 20 24" fill="none">
                        <g clip-path="url(#clip0_103_1501)">
                          <path d="M20 19.8594C20 20.9948 19.6745 21.9688 19.0234 22.7812C18.3724 23.5938 17.5885 24 16.6719 24H3.32812C2.41146 24 1.6276 23.5938 0.976562 22.7812C0.325521 21.9688 0 20.9948 0 19.8594C0 18.974 0.0442708 18.138 0.132812 17.3516C0.221354 16.5651 0.385417 15.7734 0.625 14.9766C0.864583 14.1797 1.16927 13.4974 1.53906 12.9297C1.90885 12.362 2.39844 11.8984 3.00781 11.5391C3.61719 11.1797 4.31771 11 5.10937 11C6.47396 12.3333 8.10417 13 10 13C11.8958 13 13.526 12.3333 14.8906 11C15.6823 11 16.3828 11.1797 16.9922 11.5391C17.6016 11.8984 18.0911 12.362 18.4609 12.9297C18.8307 13.4974 19.1354 14.1797 19.375 14.9766C19.6146 15.7734 19.7786 16.5651 19.8672 17.3516C19.9557 18.138 20 18.974 20 19.8594ZM16 6C16 7.65625 15.4141 9.07031 14.2422 10.2422C13.0703 11.4141 11.6562 12 10 12C8.34375 12 6.92969 11.4141 5.75781 10.2422C4.58594 9.07031 4 7.65625 4 6C4 4.34375 4.58594 2.92969 5.75781 1.75781C6.92969 0.585938 8.34375 0 10 0C11.6562 0 13.0703 0.585938 14.2422 1.75781C15.4141 2.92969 16 4.34375 16 6Z" fill="white" />
                        </g>
                        <defs>
                          <clipPath id="clip0_103_1501">
                            <rect width="20" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  <div className='flex justify-between w-full ml-3'>

                    <div>
                      <p className='text-gray-500'>Alejandro Islas Aguilar</p>

                      <div className='flex items-center gap-1 text-gray-400'>
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M3.86167 6.29417C4.70167 7.945 6.055 9.2925 7.70583 10.1383L8.98917 8.855C9.14667 8.6975 9.38 8.645 9.58417 8.715C10.2375 8.93083 10.9433 9.0475 11.6667 9.0475C11.9875 9.0475 12.25 9.31 12.25 9.63083V11.6667C12.25 11.9875 11.9875 12.25 11.6667 12.25C6.18917 12.25 1.75 7.81083 1.75 2.33333C1.75 2.0125 2.0125 1.75 2.33333 1.75H4.375C4.69583 1.75 4.95833 2.0125 4.95833 2.33333C4.95833 3.0625 5.075 3.7625 5.29083 4.41583C5.355 4.62 5.30833 4.8475 5.145 5.01083L3.86167 6.29417Z" fill="#9CA3AF" />
                          </svg>
                        </div>
                        <p>7111234567</p>
                      </div>
                    </div>

                    <div>
                      <div className='flex items-center'>
                        {/* <p className='mr-1 font-medium text-green-500'>A</p> */}
                        <div className='flex items-center justify-center w-6 h-6 text-white bg-green-500 ptext-sm'>A</div>
                      </div>
                    </div>

                  </div>

                </Link>

              </section>



              <div class="border-t border-gray-200 py-10">
                <div class="flex flex-1 justify-between sm:hidden ">
                  <a href="#" class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                  <a href="#" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
                </div>
                <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between ">

                  <div className='bg-white rounded-md'>
                    <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                      <a href="#" class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                        <span class="sr-only">Previous</span>
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                        </svg>
                      </a>

                      <a href="#" aria-current="page" class="relative z-10 inline-flex items-center bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">1</a>
                      <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
                      <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                      <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
                      <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                      <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
                      <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
                      <a href="#" class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                        <span class="sr-only">Next</span>
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                        </svg>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>



            </section>



          </div>
        </section>

      </div>

    </div>
  )
}

export default Clientes