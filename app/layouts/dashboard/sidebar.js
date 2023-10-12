import React from 'react'
import Link from 'next/link'

export const Sidebar = () => {
  return (
    <div className='select-none flex flex-col justify-between h-screen p-5 bg-white w-[230px]'>
      <ul className='list-none'>
        <li>
          <Link href="../pages/clientes" className='block px-5 py-3 text-xs tracking-wide text-gray-600 border-b rounded cursor-pointer text-gray hover:bg-gray-200 active:bg-blue-500 active:text-white'>
            <div className='flex items-center w-3 h-3 mr-2'>
              <div className='flex mr-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                  <g clip-path="url(#clip0_103_1501)">
                    <path d="M11.6667 11.5846C11.6667 12.247 11.4768 12.8151 11.097 13.2891C10.7172 13.763 10.26 14 9.72526 14H1.94141C1.40668 14 0.949436 13.763 0.569661 13.2891C0.189887 12.8151 0 12.247 0 11.5846C0 11.0681 0.0258247 10.5805 0.077474 10.1217C0.129123 9.66298 0.224826 9.20117 0.364583 8.73633C0.50434 8.27148 0.682075 7.87348 0.897786 7.54232C1.1135 7.21115 1.39909 6.94075 1.75456 6.73112C2.11003 6.52148 2.51866 6.41667 2.98047 6.41667C3.77648 7.19444 4.72743 7.58333 5.83333 7.58333C6.93924 7.58333 7.89019 7.19444 8.6862 6.41667C9.148 6.41667 9.55664 6.52148 9.91211 6.73112C10.2676 6.94075 10.5532 7.21115 10.7689 7.54232C10.9846 7.87348 11.1623 8.27148 11.3021 8.73633C11.4418 9.20117 11.5375 9.66298 11.5892 10.1217C11.6408 10.5805 11.6667 11.0681 11.6667 11.5846ZM9.33333 3.5C9.33333 4.46615 8.99154 5.29102 8.30794 5.97461C7.62435 6.6582 6.79948 7 5.83333 7C4.86719 7 4.04232 6.6582 3.35872 5.97461C2.67513 5.29102 2.33333 4.46615 2.33333 3.5C2.33333 2.53385 2.67513 1.70898 3.35872 1.02539C4.04232 0.341797 4.86719 0 5.83333 0C6.79948 0 7.62435 0.341797 8.30794 1.02539C8.99154 1.70898 9.33333 2.53385 9.33333 3.5Z" fill="#4B5563" />
                  </g>
                  <defs>
                    <clipPath id="clip0_103_1501">
                      <rect width="11.6667" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span>Clientes</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="../pages/prestamos" className='block px-5 py-3 text-xs tracking-wide text-gray-600 border-b rounded cursor-pointer text-gray hover:bg-gray-200 active:bg-blue-500 active:text-white'>
            <div className='flex items-center w-3 h-3 mr-2'>
              <div className='flex mr-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <g clip-path="url(#clip0_103_1488)">
                    <path d="M5.6 6.53333H8.4V5.83333H7.46667V2.56667H6.63542L5.55625 3.56562L6.11771 4.14896C6.32188 3.9691 6.45556 3.83056 6.51875 3.73333H6.53333V5.83333H5.6V6.53333ZM9.33333 4.66667C9.33333 5.00694 9.28229 5.35208 9.18021 5.70208C9.07813 6.05208 8.93351 6.37778 8.74635 6.67917C8.5592 6.98056 8.3125 7.22604 8.00625 7.41562C7.7 7.60521 7.36458 7.7 7 7.7C6.63542 7.7 6.3 7.60521 5.99375 7.41562C5.6875 7.22604 5.4408 6.98056 5.25365 6.67917C5.06649 6.37778 4.92188 6.05208 4.81979 5.70208C4.71771 5.35208 4.66667 5.00694 4.66667 4.66667C4.66667 4.32639 4.71771 3.98125 4.81979 3.63125C4.92188 3.28125 5.06649 2.95556 5.25365 2.65417C5.4408 2.35278 5.6875 2.10729 5.99375 1.91771C6.3 1.72812 6.63542 1.63333 7 1.63333C7.36458 1.63333 7.7 1.72812 8.00625 1.91771C8.3125 2.10729 8.5592 2.35278 8.74635 2.65417C8.93351 2.95556 9.07813 3.28125 9.18021 3.63125C9.28229 3.98125 9.33333 4.32639 9.33333 4.66667ZM13.0667 6.53333V2.8C12.5514 2.8 12.1115 2.61771 11.7469 2.25312C11.3823 1.88854 11.2 1.44861 11.2 0.933333H2.8C2.8 1.44861 2.61771 1.88854 2.25313 2.25312C1.88854 2.61771 1.44861 2.8 0.933333 2.8V6.53333C1.44861 6.53333 1.88854 6.71562 2.25313 7.08021C2.61771 7.44479 2.8 7.88472 2.8 8.4H11.2C11.2 7.88472 11.3823 7.44479 11.7469 7.08021C12.1115 6.71562 12.5514 6.53333 13.0667 6.53333ZM14 0.466667V8.86667C14 8.99306 13.9538 9.10243 13.8615 9.19479C13.7691 9.28715 13.6597 9.33333 13.5333 9.33333H0.466667C0.340278 9.33333 0.230903 9.28715 0.138542 9.19479C0.0461806 9.10243 0 8.99306 0 8.86667V0.466667C0 0.340278 0.0461806 0.230903 0.138542 0.138542C0.230903 0.0461806 0.340278 0 0.466667 0H13.5333C13.6597 0 13.7691 0.0461806 13.8615 0.138542C13.9538 0.230903 14 0.340278 14 0.466667Z" fill="#4b5563" />
                  </g>
                  <defs>
                    <clipPath id="clip0_103_1488">
                      <rect width="14" height="9.33333" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span>Préstamos</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="../pages/prendas" className='block px-5 py-3 text-xs tracking-wide text-gray-600 border-b rounded cursor-pointer text-gray hover:bg-gray-200 active:bg-blue-500 active:text-white'>
            <div className='flex items-center w-3 h-3 mr-2'>
              <div className='flex mr-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
                  <g clip-path="url(#clip0_103_1507)">
                    <path d="M3 8.25V8.75C3 8.81771 2.97526 8.8763 2.92578 8.92578C2.8763 8.97526 2.81771 9 2.75 9H2.25C2.18229 9 2.1237 8.97526 2.07422 8.92578C2.02474 8.8763 2 8.81771 2 8.75V8.25C2 8.18229 2.02474 8.1237 2.07422 8.07422C2.1237 8.02474 2.18229 8 2.25 8H2.75C2.81771 8 2.8763 8.02474 2.92578 8.07422C2.97526 8.1237 3 8.18229 3 8.25ZM3 6.25V6.75C3 6.81771 2.97526 6.8763 2.92578 6.92578C2.8763 6.97526 2.81771 7 2.75 7H2.25C2.18229 7 2.1237 6.97526 2.07422 6.92578C2.02474 6.8763 2 6.81771 2 6.75V6.25C2 6.18229 2.02474 6.1237 2.07422 6.07422C2.1237 6.02474 2.18229 6 2.25 6H2.75C2.81771 6 2.8763 6.02474 2.92578 6.07422C2.97526 6.1237 3 6.18229 3 6.25ZM3 4.25V4.75C3 4.81771 2.97526 4.8763 2.92578 4.92578C2.8763 4.97526 2.81771 5 2.75 5H2.25C2.18229 5 2.1237 4.97526 2.07422 4.92578C2.02474 4.8763 2 4.81771 2 4.75V4.25C2 4.18229 2.02474 4.1237 2.07422 4.07422C2.1237 4.02474 2.18229 4 2.25 4H2.75C2.81771 4 2.8763 4.02474 2.92578 4.07422C2.97526 4.1237 3 4.18229 3 4.25ZM12 8.25V8.75C12 8.81771 11.9753 8.8763 11.9258 8.92578C11.8763 8.97526 11.8177 9 11.75 9H4.25C4.18229 9 4.1237 8.97526 4.07422 8.92578C4.02474 8.8763 4 8.81771 4 8.75V8.25C4 8.18229 4.02474 8.1237 4.07422 8.07422C4.1237 8.02474 4.18229 8 4.25 8H11.75C11.8177 8 11.8763 8.02474 11.9258 8.07422C11.9753 8.1237 12 8.18229 12 8.25ZM12 6.25V6.75C12 6.81771 11.9753 6.8763 11.9258 6.92578C11.8763 6.97526 11.8177 7 11.75 7H4.25C4.18229 7 4.1237 6.97526 4.07422 6.92578C4.02474 6.8763 4 6.81771 4 6.75V6.25C4 6.18229 4.02474 6.1237 4.07422 6.07422C4.1237 6.02474 4.18229 6 4.25 6H11.75C11.8177 6 11.8763 6.02474 11.9258 6.07422C11.9753 6.1237 12 6.18229 12 6.25ZM12 4.25V4.75C12 4.81771 11.9753 4.8763 11.9258 4.92578C11.8763 4.97526 11.8177 5 11.75 5H4.25C4.18229 5 4.1237 4.97526 4.07422 4.92578C4.02474 4.8763 4 4.81771 4 4.75V4.25C4 4.18229 4.02474 4.1237 4.07422 4.07422C4.1237 4.02474 4.18229 4 4.25 4H11.75C11.8177 4 11.8763 4.02474 11.9258 4.07422C11.9753 4.1237 12 4.18229 12 4.25ZM13 9.75V3.25C13 3.18229 12.9753 3.1237 12.9258 3.07422C12.8763 3.02474 12.8177 3 12.75 3H1.25C1.18229 3 1.1237 3.02474 1.07422 3.07422C1.02474 3.1237 1 3.18229 1 3.25V9.75C1 9.81771 1.02474 9.8763 1.07422 9.92578C1.1237 9.97526 1.18229 10 1.25 10H12.75C12.8177 10 12.8763 9.97526 12.9258 9.92578C12.9753 9.8763 13 9.81771 13 9.75ZM14 1.25V9.75C14 10.0938 13.8776 10.388 13.6328 10.6328C13.388 10.8776 13.0938 11 12.75 11H1.25C0.90625 11 0.611979 10.8776 0.367188 10.6328C0.122396 10.388 0 10.0938 0 9.75V1.25C0 0.90625 0.122396 0.611979 0.367188 0.367188C0.611979 0.122396 0.90625 0 1.25 0H12.75C13.0938 0 13.388 0.122396 13.6328 0.367188C13.8776 0.611979 14 0.90625 14 1.25Z" fill="#4B5563" />
                  </g>
                  <defs>
                    <clipPath id="clip0_103_1507">
                      <rect width="14" height="11" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span>Prendas</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="../pages/historial-prendas" className='block px-5 py-3 text-xs tracking-wide text-gray-600 border-b rounded cursor-pointer text-gray hover:bg-gray-200 active:bg-blue-500 active:text-white'>
            <div className='flex items-center w-3 h-3 mr-2'>
              <div className='flex mr-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <g clip-path="url(#clip0_103_1490)">
                    <path d="M6 0C2.68594 0 0 2.68594 0 6C0 9.31406 2.68594 12 6 12C9.31406 12 12 9.31406 12 6C12 2.68594 9.31406 0 6 0ZM6 10.9992C3.23906 10.9992 1.00078 8.76094 1.00078 6C1.00078 3.23906 3.23906 1.00078 6 1.00078C8.76094 1.00078 10.9992 3.23906 10.9992 6C10.9992 8.76094 8.76094 10.9992 6 10.9992ZM5.50078 5.50078H3V6.50156H6.49922V2.00156H5.49844V5.50078H5.50078Z" fill="black" />
                  </g>
                  <defs>
                    <clipPath id="clip0_103_1490">
                      <rect width="12" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span>Historial</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="../pages/reportes" className='block px-5 py-3 text-xs tracking-wide text-gray-600 border-b rounded cursor-pointer text-gray hover:bg-gray-200 active:bg-blue-500 active:text-white'>
            <div className='flex items-center w-3 h-3 mr-2'>
              <div className='flex mr-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7.4375 1.13994V5.1406C7.4375 5.16961 7.44902 5.19743 7.46954 5.21794C7.49005 5.23845 7.51787 5.24997 7.54688 5.24997H11.5475C11.5583 5.24998 11.5689 5.24679 11.5779 5.2408C11.5869 5.23481 11.5939 5.22629 11.5981 5.21631C11.6022 5.20633 11.6033 5.19535 11.6012 5.18475C11.5992 5.17415 11.594 5.1644 11.5864 5.15673L7.53074 1.10111C7.52308 1.09349 7.51333 1.08831 7.50273 1.08623C7.49212 1.08415 7.48114 1.08525 7.47116 1.08941C7.46119 1.09356 7.45267 1.10058 7.44668 1.10957C7.44068 1.11856 7.43749 1.12913 7.4375 1.13994Z" fill="#4B5563" />
                  <path d="M6.78125 6.125C6.72323 6.125 6.66759 6.10195 6.62657 6.06093C6.58555 6.01991 6.5625 5.96427 6.5625 5.90625V0.875H2.51562C2.4286 0.875 2.34514 0.90957 2.28361 0.971106C2.22207 1.03264 2.1875 1.1161 2.1875 1.20312V12.7969C2.1875 12.8839 2.22207 12.9674 2.28361 13.0289C2.34514 13.0904 2.4286 13.125 2.51562 13.125H11.4844C11.5714 13.125 11.6549 13.0904 11.7164 13.0289C11.7779 12.9674 11.8125 12.8839 11.8125 12.7969V6.125H6.78125ZM9.625 10.5H4.375V9.625H9.625V10.5ZM9.625 8.3125H4.375V7.4375H9.625V8.3125Z" fill="#4B5563" />
                </svg>
              </div>
              <span>Reportes</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="#" className='block px-5 py-3 text-xs tracking-wide text-gray-600 border-b rounded cursor-pointer text-gray hover:bg-gray-200 active:bg-blue-500 active:text-white'>
            <div className='flex items-center w-3 h-3 mr-2'>
              <div className='flex mr-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <g clip-path="url(#clip0_103_1499)">
                    <path d="M13.7253 6.94403C13.7253 10.69 10.689 13.7253 6.94409 13.7253C3.19917 13.7253 0.162842 10.69 0.162842 6.94403C0.162842 3.20021 3.19917 0.162781 6.94409 0.162781C10.689 0.162781 13.7253 3.20021 13.7253 6.94403ZM7.12606 2.40497C5.63591 2.40497 4.6855 3.0327 3.93918 4.14835C3.84249 4.29289 3.87484 4.48782 4.01342 4.59291L4.96222 5.31232C5.10454 5.42025 5.30732 5.39457 5.4179 5.2543C5.90637 4.63474 6.2413 4.27547 6.98478 4.27547C7.54339 4.27547 8.23433 4.63499 8.23433 5.17667C8.23433 5.58617 7.89628 5.79647 7.34473 6.1057C6.7015 6.46628 5.85034 6.91507 5.85034 8.03778V8.14716C5.85034 8.32836 5.99726 8.47528 6.17847 8.47528H7.70972C7.89092 8.47528 8.03784 8.32836 8.03784 8.14716V8.11071C8.03784 7.33245 10.3125 7.30005 10.3125 5.19403C10.3125 3.60804 8.66732 2.40497 7.12606 2.40497ZM6.94409 9.18622C6.25052 9.18622 5.68628 9.75046 5.68628 10.444C5.68628 11.1376 6.25052 11.7018 6.94409 11.7018C7.63767 11.7018 8.2019 11.1376 8.2019 10.444C8.2019 9.75046 7.63767 9.18622 6.94409 9.18622Z" fill="#4B5563" />
                  </g>
                  <defs>
                    <clipPath id="clip0_103_1499">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span>Ayuda</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar