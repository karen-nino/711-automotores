import React from 'react'

export const Topnav = () => {
    return (
        <div className='flex justify-between h-16 py-2 bg-sky-700'>
            <div className='min-w-[230px] self-center bg-green-300'>
                <div className='bg-blue-700 w-28'>Logo</div>         
            </div>
            <div className='flex items-center justify-end px-5 gap-[20px]'>
                <ul className='flex gap-[20px]'>
                    <li>
                        <a className='px-4 py-2 bg-sky-600 flex items-center gap-[20px]'>
                            <div className='bg-blue-300 h-7 w-7'></div>
                            <span>Matriz</span>
                            <div className='w-2 h-2 bg-blue-300'></div>
                        </a>
                    </li>
                    <li>
                        <a className='px-4 py-2 bg-sky-600 flex items-center gap-[20px]'>
                            <div className='bg-blue-300 h-7 w-7'></div>
                            <span>Nombre completo</span>
                            <div className='w-2 h-2 bg-blue-300'></div>
                        </a>
                    </li>
                    <li>
                        <a className='block px-4 py-2 bg-sky-600 '>
                            <div className='bg-blue-300 h-7 w-7'></div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Topnav