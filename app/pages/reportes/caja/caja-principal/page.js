import React from 'react'
import { Topbar, Sidebar } from '@/app/layouts/dashboard'
import Link from 'next/link'

const CajaPrincipal = () => {
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
                            <Link href="../../reportes" className='mr-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='cursor-pointer fill-white hover:fill-gray-400'>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 20L7 12L15 4L17 6L11 12L17 18L15 20Z" />
                                </svg>
                            </Link>
                            <div className='mr-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M8.5 1.30278V5.87497C8.5 5.90812 8.51317 5.93992 8.53661 5.96336C8.56005 5.9868 8.59185 5.99997 8.625 5.99997H13.1972C13.2095 5.99998 13.2216 5.99633 13.2319 5.98948C13.2422 5.98264 13.2502 5.9729 13.2549 5.9615C13.2597 5.9501 13.2609 5.93755 13.2586 5.92543C13.2562 5.91331 13.2503 5.90217 13.2416 5.89341L8.60656 1.25841C8.5978 1.2497 8.58666 1.24379 8.57454 1.24141C8.56243 1.23903 8.54987 1.24029 8.53847 1.24504C8.52707 1.24978 8.51733 1.2578 8.51049 1.26808C8.50364 1.27836 8.49999 1.29043 8.5 1.30278Z" fill="white" />
                                    <path d="M7.75 7C7.6837 7 7.62011 6.97366 7.57322 6.92678C7.52634 6.87989 7.5 6.8163 7.5 6.75V1H2.875C2.77554 1 2.68016 1.03951 2.60983 1.10983C2.53951 1.18016 2.5 1.27554 2.5 1.375V14.625C2.5 14.7245 2.53951 14.8198 2.60983 14.8902C2.68016 14.9605 2.77554 15 2.875 15H13.125C13.2245 15 13.3198 14.9605 13.3902 14.8902C13.4605 14.8198 13.5 14.7245 13.5 14.625V7H7.75ZM11 12H5V11H11V12ZM11 9.5H5V8.5H11V9.5Z" fill="white" />
                                </svg>
                            </div>
                            <span>Caja principal</span>
                        </article>

                        <section className='mt-10 ml-5 mb-44'>

                            <div className='mb-8'>
                                <h3 class="block text-sm font-semibold text-gray-700 mb-4">Caja Principal</h3>
                                <div className='flex gap-4'>

                                    {/* <Link href="#" className='flex flex-col items-center justify-center w-56 gap-2 text-center bg-white border-2 border-gray-300 border-solid h-28'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="25" viewBox="0 0 32 25" fill="none">
                                            <g clip-path="url(#clip0_475_2445)">
                                                <path d="M31.9979 16.5692V19.9973C31.9979 20.1521 31.9414 20.286 31.8283 20.3991C31.7152 20.5121 31.5813 20.5687 31.4266 20.5687H6.85842V23.9968C6.85842 24.1515 6.80188 24.2854 6.6888 24.3985C6.57572 24.5116 6.44181 24.5681 6.28707 24.5681C6.14423 24.5681 6.00139 24.5086 5.85856 24.3896L0.16289 18.6761C0.0557615 18.5689 0.00219727 18.438 0.00219727 18.2833C0.00219727 18.1166 0.0557615 17.9797 0.16289 17.8726L5.87641 12.1591C5.98354 12.052 6.12043 11.9984 6.28707 11.9984C6.44181 11.9984 6.57572 12.0549 6.6888 12.168C6.80188 12.2811 6.85842 12.415 6.85842 12.5697V15.9979H31.4266C31.5813 15.9979 31.7152 16.0544 31.8283 16.1675C31.9414 16.2806 31.9979 16.4145 31.9979 16.5692ZM31.9979 6.85622C31.9979 7.02287 31.9443 7.15975 31.8372 7.26688L26.1237 12.9804C26.0166 13.0875 25.8797 13.1411 25.713 13.1411C25.5583 13.1411 25.4244 13.0846 25.3113 12.9715C25.1982 12.8584 25.1417 12.7245 25.1417 12.5697V9.14163H0.573549C0.418808 9.14163 0.284898 9.08509 0.171817 8.97201C0.0587373 8.85893 0.00219727 8.72502 0.00219727 8.57028V5.14217C0.00219727 4.98743 0.0587373 4.85351 0.171817 4.74043C0.284898 4.62735 0.418808 4.57081 0.573549 4.57081H25.1417V1.1427C25.1417 0.976058 25.1953 0.839171 25.3024 0.732043C25.4095 0.624914 25.5464 0.57135 25.713 0.57135C25.8559 0.57135 25.9987 0.630866 26.1416 0.749898L31.8372 6.44556C31.9443 6.55269 31.9979 6.68958 31.9979 6.85622Z" fill="#686868" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_475_2445">
                                                    <rect width="32" height="24.5681" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p className='font-bold text-gray-500'>Flujo de caja</p>
                                    </Link> */}

                                </div>
                            </div>

                        </section>

                    </div>
                </section>

            </div>

        </div>
    )
}

export default CajaPrincipal