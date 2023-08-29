import React from 'react'

export const Sidebar = () => {
  return (
    <div className='flex'>
      <div className='fixed flex flex-col justify-between h-screen p-5 bg-white w-[230px]'>
        <ul className='list-none'>
          <li>
            <a className='block px-5 py-3 text-xs tracking-wide text-gray-600 border-b rounded text-gray hover:bg-gray-200'>
            <div className='inline-block w-3 h-3 mr-2 bg-gray-600'></div> Clientes</a>
          </li>
          <li>
            <a className='block px-5 py-3 text-xs tracking-wide text-gray-600 border-b rounded text-gray hover:bg-gray-200'>
            <div className='inline-block w-3 h-3 mr-2 bg-gray-600'></div> Préstamos</a>
          </li>
          <li>
            <a className='block px-5 py-3 text-xs tracking-wide text-gray-600 border-b rounded text-gray hover:bg-gray-200'>
            <div className='inline-block w-3 h-3 mr-2 bg-gray-600'></div> Prendas</a>
          </li>
          <li>
            <a className='block px-5 py-3 text-xs tracking-wide text-gray-600 border-b rounded text-gray hover:bg-gray-200'>
            <div className='inline-block w-3 h-3 mr-2 bg-gray-600'></div> Historial</a>
          </li>
          <li>
            <a className='block px-5 py-3 text-xs tracking-wide text-gray-600 border-b rounded text-gray hover:bg-gray-200'>
            <div className='inline-block w-3 h-3 mr-2 bg-gray-600'></div> Reportes</a>
          </li>
          <li>
            <a className='block px-5 py-3 text-xs tracking-wide text-gray-600 border-b rounded text-gray hover:bg-gray-200'>
            <div className='inline-block w-3 h-3 mr-2 bg-gray-600'></div> Ayuda</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar