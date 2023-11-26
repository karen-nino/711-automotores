import React from 'react'
import { Topbar, Sidebar } from '@/app/layouts/dashboard'
import Link from 'next/link'
import ModalRefrendar from '@/app/components/modal/modal-refrendar/page'
import ModalLiquidar from '@/app/components/modal/modal-liquidar/page'
import ModalAbonarPerdidos from '@/app/components/modal/modal-abonar/perdidos/page'


export const DetallesPrestamoPerdidos = () => {
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
                                <Link href="./" className='mr-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='cursor-pointer fill-white hover:fill-gray-400'>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 20L7 12L15 4L17 6L11 12L17 18L15 20Z" />
                                    </svg>
                                </Link>
                                <span>Detalles del préstamo</span>

                                <div className='absolute flex flex-col items-center justify-center right-20 top-20'>

                                    <button className='flex items-center justify-center w-16 h-16 mb-2 bg-red-500 rounded-full'>
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
                                    </button>

                                    <ul>
                                        <li>
                                            <a href="#" className='flex items-center justify-center w-16 h-16 mb-2 bg-red-500 rounded-full'>
                                                {/* <svg for="tw-modal-fotos" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M23.2252 20.4726C23.2252 22.0512 22.7119 23.4105 21.6853 24.5506C20.6587 25.6906 19.3252 26.3948 17.6847 26.6631V29.3714C17.6847 29.5158 17.6383 29.6345 17.5454 29.7273C17.4526 29.8202 17.3339 29.8666 17.1895 29.8666H15.1002C14.966 29.8666 14.85 29.8176 14.752 29.7196C14.6539 29.6216 14.6049 29.5055 14.6049 29.3714V26.6631C13.924 26.5702 13.2662 26.4103 12.6317 26.1833C11.9972 25.9563 11.4736 25.7268 11.0609 25.4946C10.6482 25.2625 10.2664 25.0148 9.91565 24.7518C9.56485 24.4887 9.32497 24.2952 9.196 24.1714C9.06703 24.0476 8.97676 23.9547 8.92517 23.8928C8.74977 23.6762 8.73946 23.4646 8.89422 23.2583L10.4883 21.169C10.5605 21.0658 10.6791 21.0039 10.8442 20.9833C10.999 20.9627 11.1228 21.0091 11.2156 21.1226L11.2466 21.1535C12.4125 22.175 13.666 22.8198 15.0073 23.0881C15.3891 23.1706 15.7708 23.2119 16.1526 23.2119C16.9883 23.2119 17.7234 22.99 18.3579 22.5464C18.9924 22.1027 19.3097 21.4734 19.3097 20.6583C19.3097 20.3694 19.2323 20.096 19.0776 19.8381C18.9228 19.5801 18.75 19.3635 18.5591 19.1881C18.3682 19.0127 18.0664 18.8192 17.6537 18.6077C17.241 18.3962 16.9006 18.2311 16.6323 18.1125C16.3641 17.9938 15.9514 17.8262 15.3942 17.6095C14.9918 17.4444 14.6746 17.3154 14.4424 17.2226C14.2103 17.1297 13.893 16.993 13.4906 16.8125C13.0883 16.6319 12.7658 16.472 12.5234 16.3327C12.2809 16.1934 11.9895 16.0103 11.649 15.7833C11.3085 15.5563 11.0325 15.3371 10.821 15.1256C10.6095 14.9141 10.3851 14.6613 10.1478 14.3672C9.91049 14.0732 9.72735 13.774 9.59838 13.4696C9.46942 13.1652 9.36108 12.8222 9.27338 12.4404C9.18569 12.0587 9.14184 11.6563 9.14184 11.2333C9.14184 9.80949 9.64739 8.56108 10.6585 7.48806C11.6696 6.41505 12.9851 5.72378 14.6049 5.41425V2.62854C14.6049 2.49441 14.6539 2.37834 14.752 2.28032C14.85 2.18231 14.966 2.1333 15.1002 2.1333H17.1895C17.3339 2.1333 17.4526 2.17973 17.5454 2.27259C17.6383 2.36544 17.6847 2.48409 17.6847 2.62854V5.35235C18.2728 5.41425 18.8428 5.5329 19.3948 5.7083C19.9468 5.8837 20.3956 6.05652 20.7412 6.22675C21.0869 6.39699 21.4145 6.59044 21.724 6.80711C22.0335 7.02378 22.2347 7.17338 22.3276 7.25592C22.4204 7.33846 22.4978 7.41068 22.5597 7.47259C22.7351 7.6583 22.7609 7.85433 22.6371 8.06068L21.3835 10.3202C21.301 10.475 21.1823 10.5575 21.0276 10.5678C20.8831 10.5988 20.7438 10.5627 20.6097 10.4595C20.5787 10.4285 20.5039 10.3666 20.3853 10.2738C20.2666 10.1809 20.0654 10.0442 19.7817 9.86366C19.498 9.6831 19.1962 9.51802 18.8764 9.36842C18.5565 9.21882 18.1722 9.08469 17.7234 8.96604C17.2746 8.84739 16.8335 8.78806 16.4002 8.78806C15.42 8.78806 14.6204 9.00989 14.0014 9.45354C13.3823 9.89719 13.0728 10.4698 13.0728 11.1714C13.0728 11.4396 13.1166 11.6873 13.2043 11.9143C13.292 12.1412 13.4442 12.3553 13.6609 12.5565C13.8776 12.7577 14.0813 12.9279 14.2722 13.0672C14.4631 13.2065 14.752 13.3664 15.1389 13.547C15.5258 13.7275 15.8379 13.8668 16.0752 13.9648C16.3125 14.0629 16.6736 14.2047 17.1585 14.3904C17.7053 14.5968 18.1232 14.7593 18.4121 14.8779C18.701 14.9966 19.093 15.1771 19.5883 15.4196C20.0835 15.6621 20.473 15.8813 20.7567 16.0773C21.0404 16.2734 21.3603 16.5313 21.7162 16.8512C22.0722 17.171 22.3456 17.4986 22.5365 17.8339C22.7274 18.1692 22.8899 18.5639 23.024 19.0178C23.1581 19.4718 23.2252 19.9567 23.2252 20.4726Z" fill="white" />
                        </svg> */}
                                                <label for="tw-modal-refrendar">Refrendar</label>
                                                < ModalRefrendar />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className='flex items-center justify-center w-16 h-16 mb-2 bg-red-500 rounded-full'>
                                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="28" height="19" viewBox="0 0 28 19" fill="none">
                            <g clip-path="url(#clip0_371_993)">
                                <path d="M11.2 13.0667H16.8V11.6667H14.9333V5.13333H13.2708L11.1125 7.13125L12.2354 8.29792C12.6438 7.93819 12.9111 7.66111 13.0375 7.46667H13.0667V11.6667H11.2V13.0667ZM18.6667 9.33333C18.6667 10.0139 18.5646 10.7042 18.3604 11.4042C18.1563 12.1042 17.867 12.7556 17.4927 13.3583C17.1184 13.9611 16.625 14.4521 16.0125 14.8312C15.4 15.2104 14.7292 15.4 14 15.4C13.2708 15.4 12.6 15.2104 11.9875 14.8312C11.375 14.4521 10.8816 13.9611 10.5073 13.3583C10.133 12.7556 9.84375 12.1042 9.63958 11.4042C9.43542 10.7042 9.33333 10.0139 9.33333 9.33333C9.33333 8.65278 9.43542 7.9625 9.63958 7.2625C9.84375 6.5625 10.133 5.91111 10.5073 5.30833C10.8816 4.70556 11.375 4.21458 11.9875 3.83542C12.6 3.45625 13.2708 3.26667 14 3.26667C14.7292 3.26667 15.4 3.45625 16.0125 3.83542C16.625 4.21458 17.1184 4.70556 17.4927 5.30833C17.867 5.91111 18.1563 6.5625 18.3604 7.2625C18.5646 7.9625 18.6667 8.65278 18.6667 9.33333ZM26.1333 13.0667V5.6C25.1028 5.6 24.2229 5.23542 23.4938 4.50625C22.7646 3.77708 22.4 2.89722 22.4 1.86667H5.6C5.6 2.89722 5.23542 3.77708 4.50625 4.50625C3.77708 5.23542 2.89722 5.6 1.86667 5.6V13.0667C2.89722 13.0667 3.77708 13.4312 4.50625 14.1604C5.23542 14.8896 5.6 15.7694 5.6 16.8H22.4C22.4 15.7694 22.7646 14.8896 23.4938 14.1604C24.2229 13.4312 25.1028 13.0667 26.1333 13.0667ZM28 0.933333V17.7333C28 17.9861 27.9076 18.2049 27.7229 18.3896C27.5382 18.5743 27.3194 18.6667 27.0667 18.6667H0.933333C0.680556 18.6667 0.461806 18.5743 0.277083 18.3896C0.0923611 18.2049 0 17.9861 0 17.7333V0.933333C0 0.680556 0.0923611 0.461806 0.277083 0.277083C0.461806 0.0923611 0.680556 0 0.933333 0H27.0667C27.3194 0 27.5382 0.0923611 27.7229 0.277083C27.9076 0.461806 28 0.680556 28 0.933333Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_371_993">
                                    <rect width="28" height="18.6667" fill="white" />
                                </clipPath>
                            </defs>
                        </svg> */}
                                                <label for="tw-modal-abonar-perdidos">Abonar</label>
                                                < ModalAbonarPerdidos />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className='flex items-center justify-center w-16 h-16 mb-2 bg-red-500 rounded-full'>
                                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <g clip-path="url(#clip0_548_1021)">
                                <path d="M25.6898 22.2182C25.6898 22.7401 25.5076 23.1833 25.1432 23.5477L23.5625 25.1432C23.1784 25.5076 22.7303 25.6898 22.2182 25.6898C21.6962 25.6898 21.253 25.5076 20.8886 25.1432L15.5261 19.7659C15.1519 19.4113 14.9648 18.9682 14.9648 18.4363C14.9648 17.9144 15.1765 17.4416 15.6 17.0182L11.8182 13.2363L9.9568 15.0977C9.81892 15.2356 9.6515 15.3045 9.45453 15.3045C9.25756 15.3045 9.09013 15.2356 8.95225 15.0977C8.97195 15.1174 9.0335 15.1765 9.13691 15.275C9.24032 15.3735 9.30188 15.4375 9.32157 15.467C9.34127 15.4966 9.39051 15.5532 9.4693 15.6369C9.54809 15.7206 9.59733 15.7871 9.61703 15.8363C9.63672 15.8856 9.66627 15.9521 9.70566 16.0358C9.74506 16.1195 9.77214 16.2007 9.78691 16.2795C9.80169 16.3583 9.80907 16.447 9.80907 16.5454C9.80907 16.9197 9.67119 17.2545 9.39544 17.55C9.36589 17.5795 9.28464 17.6682 9.15169 17.8159C9.01873 17.9636 8.92517 18.0646 8.871 18.1187C8.81684 18.1729 8.72574 18.2541 8.59771 18.3625C8.46968 18.4708 8.36135 18.5471 8.27271 18.5915C8.18407 18.6358 8.07574 18.6801 7.94771 18.7244C7.81968 18.7687 7.69165 18.7909 7.56362 18.7909C7.16968 18.7909 6.83483 18.653 6.55907 18.3773L0.5318 12.35C0.256043 12.0742 0.118164 11.7394 0.118164 11.3454C0.118164 11.2174 0.140323 11.0894 0.184641 10.9613C0.22896 10.8333 0.273278 10.725 0.317596 10.6363C0.361914 10.5477 0.43824 10.4394 0.546573 10.3113C0.654906 10.1833 0.736156 10.0922 0.790323 10.0381C0.84449 9.98388 0.945437 9.89032 1.09316 9.75737C1.24089 9.62441 1.32953 9.54316 1.35907 9.51362C1.65453 9.23786 1.98938 9.09998 2.36362 9.09998C2.4621 9.09998 2.55074 9.10737 2.62953 9.12214C2.70832 9.13691 2.78957 9.164 2.87328 9.20339C2.95699 9.24279 3.02347 9.27233 3.07271 9.29203C3.12195 9.31172 3.18843 9.36097 3.27214 9.43975C3.35585 9.51854 3.41248 9.56779 3.44203 9.58748C3.47157 9.60718 3.53559 9.66873 3.63407 9.77214C3.73256 9.87555 3.79165 9.9371 3.81135 9.9568C3.67347 9.81892 3.60453 9.6515 3.60453 9.45453C3.60453 9.25756 3.67347 9.09013 3.81135 8.95225L8.95225 3.81135C9.09013 3.67347 9.25756 3.60453 9.45453 3.60453C9.6515 3.60453 9.81892 3.67347 9.9568 3.81135C9.9371 3.79165 9.87555 3.73256 9.77214 3.63407C9.66873 3.53559 9.60718 3.47157 9.58748 3.44203C9.56779 3.41248 9.51854 3.35585 9.43975 3.27214C9.36097 3.18843 9.31172 3.12195 9.29203 3.07271C9.27233 3.02347 9.24279 2.95699 9.20339 2.87328C9.164 2.78957 9.13691 2.70832 9.12214 2.62953C9.10737 2.55074 9.09998 2.4621 9.09998 2.36362C9.09998 1.98938 9.23786 1.65453 9.51362 1.35907C9.54316 1.32953 9.62441 1.24089 9.75737 1.09316C9.89032 0.945437 9.98388 0.84449 10.0381 0.790323C10.0922 0.736156 10.1833 0.654906 10.3113 0.546573C10.4394 0.43824 10.5477 0.361914 10.6363 0.317596C10.725 0.273278 10.8333 0.22896 10.9613 0.184641C11.0894 0.140323 11.2174 0.118164 11.3454 0.118164C11.7394 0.118164 12.0742 0.256043 12.35 0.5318L18.3773 6.55907C18.653 6.83483 18.7909 7.16968 18.7909 7.56362C18.7909 7.69165 18.7687 7.81968 18.7244 7.94771C18.6801 8.07574 18.6358 8.18407 18.5915 8.27271C18.5471 8.36135 18.4708 8.46968 18.3625 8.59771C18.2541 8.72574 18.1729 8.81684 18.1187 8.871C18.0646 8.92517 17.9636 9.01873 17.8159 9.15169C17.6682 9.28464 17.5795 9.36589 17.55 9.39544C17.2545 9.67119 16.9197 9.80907 16.5454 9.80907C16.447 9.80907 16.3583 9.80169 16.2795 9.78691C16.2007 9.77214 16.1195 9.74506 16.0358 9.70566C15.9521 9.66627 15.8856 9.63672 15.8363 9.61703C15.7871 9.59733 15.7206 9.54809 15.6369 9.4693C15.5532 9.39051 15.4966 9.34127 15.467 9.32157C15.4375 9.30188 15.3735 9.24032 15.275 9.13691C15.1765 9.0335 15.1174 8.97195 15.0977 8.95225C15.2356 9.09013 15.3045 9.25756 15.3045 9.45453C15.3045 9.6515 15.2356 9.81892 15.0977 9.9568L13.2363 11.8182L17.0182 15.6C17.4416 15.1765 17.9144 14.9648 18.4363 14.9648C18.9485 14.9648 19.3966 15.147 19.7807 15.5113L25.1432 20.8738C25.5076 21.2579 25.6898 21.706 25.6898 22.2182Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_548_1021">
                                    <rect width="26" height="26" fill="white" />
                                </clipPath>
                            </defs>
                        </svg> */}
                                                <label for="tw-modal-liquidar">Liquidar</label>
                                                < ModalLiquidar />
                                            </a>
                                        </li>
                                    </ul>

                                </div>


                            </article>

                            <section className='mt-10 ml-5 w-[698px] mb-44'>

                                <article className='pb-10'>
                                    <div className='w-full p-4 text-white bg-gray-700'>
                                        <p>6</p>
                                        <p>Alejandro Aguilar Islas</p>
                                    </div>

                                    <div className='w-full px-4 py-6 text-gray-500 break-words bg-white'>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px] font-bold'>Prendas</div>
                                            <div className=''>Ford Focus 2018</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px] font-bold'>Monto del préstamo</div>
                                            <div className=''>$10,000.00</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px] font-bold'>Fecha de préstamo</div>
                                            <div className=''>30 de mayo de 2003</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px] font-bold'>Fecha de vencimiento</div>
                                            <div className=''>1 de Junio de 2023</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px] font-bold'>Comercialización</div>
                                            <div className=''>6 de Junio de 2023</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px] font-bold'>Interés</div>
                                            <div className=''>11.6%</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px] font-bold'>Periodo</div>
                                            <div className=''>Diario</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px] font-bold'>Plazo</div>
                                            <div className=''>1 día</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px] font-bold'>Categoría</div>
                                            <div className=''>General</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px] font-bold'>Estado</div>
                                            <div className=''>Empeño</div>
                                        </div>
                                    </div>
                                </article>

                                <div className='w-full mb-5'>
                                    <p class="block mb-2 text-sm font-medium text-gray-700">Categoría</p>
                                    <article className='pb-10'>
                                        <table class="min-w-full leading-normal">
                                            <thead>
                                                <tr>
                                                    <th
                                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">

                                                    </th>
                                                    <th
                                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Fecha
                                                    </th>
                                                    <th
                                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Operación
                                                    </th>
                                                    <th
                                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Cargo
                                                    </th>
                                                    <th
                                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Abono
                                                    </th>
                                                    <th
                                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Saldo
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">

                                                        </p>
                                                    </td>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            30/05/23 12:27
                                                        </p>
                                                    </td>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            Préstamo
                                                        </p>
                                                    </td>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            $100,000.00
                                                        </p>
                                                    </td>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            $0.00
                                                        </p>
                                                    </td>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            $100,000.00
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">

                                                        </p>
                                                    </td>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            30/05/23 12:27
                                                        </p>
                                                    </td>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            Préstamo
                                                        </p>
                                                    </td>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            $100,000.00
                                                        </p>
                                                    </td>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            $0.00
                                                        </p>
                                                    </td>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            $100,000.00
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">

                                                        </p>
                                                    </td>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            30/05/23 12:27
                                                        </p>
                                                    </td>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            Préstamo
                                                        </p>
                                                    </td>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            $100,000.00
                                                        </p>
                                                    </td>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            $0.00
                                                        </p>
                                                    </td>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            $100,000.00
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </article>
                                </div>

                            </section>



                        </div>
                    </section>

                </div>

            </div>
        </div>
    )
}

export default DetallesPrestamoPerdidos