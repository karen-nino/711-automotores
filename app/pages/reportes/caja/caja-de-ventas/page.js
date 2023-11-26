import React from 'react'
import { Topbar, Sidebar } from '@/app/layouts/dashboard'
import Link from 'next/link'

const CajaVentas = () => {
    return (
        <div>
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
                                <span>Caja de ventas</span>
                            </article>

                            <section className='mt-10 ml-5 mb-44'>

                                <div className='mb-8'>
                                    <h3 class="block text-sm font-semibold text-gray-700 mb-4">Caja de ventas </h3>
                                    <div className='flex gap-4'>
                                        <Link href="./caja-de-ventas/flujo-de-caja" className='flex flex-col items-center justify-center w-56 gap-2 text-center bg-white border-2 border-gray-400 border-solid h-28'>
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
                                        </Link>

                                        <Link href="./caja-de-ventas/resumen-de-caja" className='flex flex-col items-center justify-center w-56 gap-2 text-center bg-white border-2 border-gray-400 border-solid h-28'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none">
                                                <g clip-path="url(#clip0_475_2447)">
                                                    <path d="M31.5253 6.60253C32.0284 7.31937 32.1416 8.13054 31.8649 9.03603L26.6772 26.1271C26.4382 26.932 25.9572 27.608 25.2341 28.1551C24.5109 28.7021 23.7406 28.9757 22.9232 28.9757H5.51138C4.54301 28.9757 3.60922 28.6393 2.71002 27.9664C1.81082 27.2936 1.18515 26.4667 0.833016 25.4858C0.531187 24.6431 0.51861 23.8446 0.795288 23.09C0.795288 23.0397 0.814152 22.8699 0.851881 22.5806C0.88961 22.2914 0.914762 22.0587 0.927338 21.8827C0.939915 21.7821 0.92105 21.6469 0.870745 21.4771C0.82044 21.3073 0.801576 21.1847 0.814152 21.1092C0.839305 20.9709 0.88961 20.8388 0.965067 20.7131C1.04052 20.5873 1.14428 20.4395 1.27633 20.2698C1.40838 20.1 1.51213 19.9522 1.58759 19.8264C1.87684 19.3486 2.15981 18.7732 2.43649 18.1004C2.71316 17.4275 2.90181 16.8522 3.00242 16.3743C3.04015 16.2485 3.04329 16.0599 3.01185 15.8083C2.98041 15.5568 2.97727 15.3807 3.00242 15.2801C3.04015 15.1418 3.14705 14.9657 3.32311 14.7519C3.49918 14.5381 3.60608 14.3935 3.64381 14.3181C3.90791 13.8653 4.17201 13.2868 4.43611 12.5825C4.70021 11.8783 4.85741 11.3123 4.90772 10.8847C4.9203 10.7716 4.90458 10.5703 4.86056 10.2811C4.81654 9.99183 4.81969 9.81576 4.86999 9.75288C4.9203 9.58939 5.05863 9.3976 5.28501 9.17751C5.51138 8.95743 5.64972 8.81595 5.70002 8.75307C5.93897 8.42608 6.20622 7.89474 6.50176 7.15903C6.7973 6.42332 6.97022 5.81651 7.02053 5.33862C7.0331 5.23801 7.01424 5.07766 6.96393 4.85757C6.91363 4.63749 6.90105 4.47085 6.92621 4.35767C6.95136 4.25706 7.00795 4.14387 7.09599 4.01811C7.18402 3.89235 7.29721 3.74772 7.43554 3.58423C7.57388 3.42074 7.68078 3.28869 7.75624 3.18808C7.85685 3.03716 7.9606 2.84538 8.0675 2.61271C8.1744 2.38005 8.26872 2.15997 8.35047 1.95246C8.43221 1.74495 8.53282 1.51858 8.6523 1.27334C8.77177 1.02811 8.89439 0.826888 9.02015 0.669685C9.14591 0.512482 9.31255 0.364711 9.52006 0.226372C9.72756 0.0880337 9.95394 0.0157203 10.1992 0.00943218C10.4444 0.00314406 10.7431 0.0377287 11.0952 0.113186L11.0764 0.169779C11.5543 0.0565931 11.875 0 12.0384 0H26.3942C27.3249 0 28.0417 0.352135 28.5448 1.0564C29.0478 1.76067 29.161 2.57813 28.8843 3.50877L23.7155 20.5999C23.2627 22.0965 22.8131 23.0617 22.3667 23.4956C21.9202 23.9294 21.1122 24.1464 19.9426 24.1464H3.54949C3.20993 24.1464 2.97098 24.2407 2.83264 24.4294C2.6943 24.6306 2.68801 24.901 2.81377 25.2405C3.1156 26.1209 4.02109 26.561 5.53024 26.561H22.9421C23.3068 26.561 23.6589 26.4636 23.9985 26.2686C24.338 26.0737 24.5581 25.8127 24.6587 25.4858L30.318 6.86663C30.4061 6.58995 30.4375 6.23153 30.4123 5.79136C30.8902 5.98 31.2612 6.25039 31.5253 6.60253ZM11.4537 6.64026C11.4033 6.80375 11.4159 6.94523 11.4914 7.0647C11.5668 7.18418 11.6926 7.24392 11.8687 7.24392H23.3382C23.5017 7.24392 23.662 7.18418 23.8192 7.0647C23.9764 6.94523 24.0802 6.80375 24.1305 6.64026L24.5267 5.43294C24.577 5.26945 24.5644 5.12796 24.4889 5.00849C24.4135 4.88901 24.2877 4.82928 24.1116 4.82928H12.6421C12.4786 4.82928 12.3183 4.88901 12.1611 5.00849C12.0039 5.12796 11.9001 5.26945 11.8498 5.43294L11.4537 6.64026ZM9.88791 11.4695C9.83761 11.633 9.85018 11.7745 9.92564 11.894C10.0011 12.0135 10.1269 12.0732 10.3029 12.0732H21.7725C21.936 12.0732 22.0963 12.0135 22.2535 11.894C22.4107 11.7745 22.5145 11.633 22.5648 11.4695L22.9609 10.2622C23.0112 10.0987 22.9986 9.95724 22.9232 9.83777C22.8477 9.71829 22.722 9.65856 22.5459 9.65856H11.0764C10.9129 9.65856 10.7525 9.71829 10.5953 9.83777C10.4381 9.95724 10.3344 10.0987 10.2841 10.2622L9.88791 11.4695Z" fill="#686868" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_475_2447">
                                                        <rect width="32" height="28.9757" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <p className='font-bold text-gray-500'>Resumen de caja</p>
                                        </Link>

                                        <Link href="#" className='flex flex-col items-center justify-center w-56 gap-2 text-center bg-white border-2 border-gray-300 border-solid h-28'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24" fill="none">
                                                <path d="M-2.38419e-07 10.0741V13.6296C-2.38419e-07 13.8025 0.0555553 13.9445 0.166666 14.0556C0.277778 14.1667 0.419753 14.2222 0.592592 14.2222H23.7037V18.3704C23.7037 18.6296 23.821 18.8086 24.0556 18.9074C24.2901 19.0062 24.5062 18.9753 24.7037 18.8148L31.8148 12.3333C31.9383 12.2099 32 12.0679 32 11.9074C32 11.7346 31.9383 11.5864 31.8148 11.463L24.7037 4.90741C24.5062 4.73458 24.2901 4.69754 24.0556 4.7963C23.821 4.90741 23.7037 5.08643 23.7037 5.33334V9.48149H0.592592C0.419753 9.48149 0.277778 9.53704 0.166666 9.64816C0.0555553 9.75927 -2.38419e-07 9.90124 -2.38419e-07 10.0741Z" fill="#686868" />
                                            </svg>
                                            <p className='font-bold text-gray-500'>Registrar depósito</p>
                                        </Link>

                                        <Link href="#" className='flex flex-col items-center justify-center w-56 gap-2 text-center bg-white border-2 border-gray-300 border-solid h-28text-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24" fill="none">
                                                <g clip-path="url(#clip0_475_2452)">
                                                    <path d="M32 10.0741V13.6296C32 13.8025 31.9444 13.9445 31.8333 14.0556C31.7222 14.1667 31.5802 14.2222 31.4074 14.2222H8.2963V18.3704C8.2963 18.6296 8.17901 18.8086 7.94444 18.9074C7.70988 19.0062 7.49383 18.9753 7.2963 18.8148L0.185185 12.3333C0.0617284 12.2099 0 12.0679 0 11.9074C0 11.7346 0.0617284 11.5864 0.185185 11.463L7.2963 4.90741C7.49383 4.73458 7.70988 4.69754 7.94444 4.7963C8.17901 4.90741 8.2963 5.08643 8.2963 5.33334V9.48149H31.4074C31.5802 9.48149 31.7222 9.53704 31.8333 9.64816C31.9444 9.75927 32 9.90124 32 10.0741Z" fill="#686868" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_475_2452">
                                                        <rect width="32" height="23.7037" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <p className='font-bold text-gray-500'>Registrar retiro</p>
                                        </Link>

                                        <Link href="#" className='flex flex-col items-center justify-center w-56 gap-2 text-center bg-white border-2 border-gray-300 border-solid h-28'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" viewBox="0 0 32 22" fill="none">
                                                <g clip-path="url(#clip0_474_2434)">
                                                    <path d="M12.8 14.9333H19.2V13.3333H17.0667V5.86667H15.1667L12.7 8.15L13.9833 9.48333C14.45 9.07222 14.7556 8.75556 14.9 8.53333H14.9333V13.3333H12.8V14.9333ZM21.3333 10.6667C21.3333 11.4444 21.2167 12.2333 20.9833 13.0333C20.75 13.8333 20.4194 14.5778 19.9917 15.2667C19.5639 15.9556 19 16.5167 18.3 16.95C17.6 17.3833 16.8333 17.6 16 17.6C15.1667 17.6 14.4 17.3833 13.7 16.95C13 16.5167 12.4361 15.9556 12.0083 15.2667C11.5806 14.5778 11.25 13.8333 11.0167 13.0333C10.7833 12.2333 10.6667 11.4444 10.6667 10.6667C10.6667 9.88889 10.7833 9.1 11.0167 8.3C11.25 7.5 11.5806 6.75556 12.0083 6.06667C12.4361 5.37778 13 4.81667 13.7 4.38333C14.4 3.95 15.1667 3.73333 16 3.73333C16.8333 3.73333 17.6 3.95 18.3 4.38333C19 4.81667 19.5639 5.37778 19.9917 6.06667C20.4194 6.75556 20.75 7.5 20.9833 8.3C21.2167 9.1 21.3333 9.88889 21.3333 10.6667ZM29.8667 14.9333V6.4C28.6889 6.4 27.6833 5.98333 26.85 5.15C26.0167 4.31667 25.6 3.31111 25.6 2.13333H6.4C6.4 3.31111 5.98333 4.31667 5.15 5.15C4.31667 5.98333 3.31111 6.4 2.13333 6.4V14.9333C3.31111 14.9333 4.31667 15.35 5.15 16.1833C5.98333 17.0167 6.4 18.0222 6.4 19.2H25.6C25.6 18.0222 26.0167 17.0167 26.85 16.1833C27.6833 15.35 28.6889 14.9333 29.8667 14.9333ZM32 1.06667V20.2667C32 20.5556 31.8944 20.8056 31.6833 21.0167C31.4722 21.2278 31.2222 21.3333 30.9333 21.3333H1.06667C0.777778 21.3333 0.527778 21.2278 0.316667 21.0167C0.105556 20.8056 0 20.5556 0 20.2667V1.06667C0 0.777778 0.105556 0.527778 0.316667 0.316667C0.527778 0.105556 0.777778 0 1.06667 0H30.9333C31.2222 0 31.4722 0.105556 31.6833 0.316667C31.8944 0.527778 32 0.777778 32 1.06667Z" fill="#686868" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_474_2434">
                                                        <rect width="32" height="21.3333" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <p className='font-bold text-gray-500'>Registrar gasto</p>
                                        </Link>
                                    </div>
                                </div>

                            </section>

                        </div>
                    </section>

                </div>

            </div>

        </div>
    )
}

export default CajaVentas