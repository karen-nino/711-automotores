import React from 'react'

export const Topnav = () => {
    return (
        <div className='flex justify-between h-16 py-2 bg-sky-700'>
            <div className='min-w-[230px] self-center bg-green-300'>
                <div className='bg-blue-700 w-28'>Logo</div>         
            </div>
            <div className='flex items-center justify-end px-5 '>
                <ul>
                    <li>
                        <a className='block px-4 py-2 bg-sky-600 '>
                            <div className='bg-blue-300 h-7 w-7'></div>
                        </a>
                    </li>
                </ul>
                <ul>
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