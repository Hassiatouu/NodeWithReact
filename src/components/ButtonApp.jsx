import React from 'react'

const ButtonApp = ({ text1,text2 }) => {
  return (
    <button
        type="button"
        className="rounded-md bg-btn px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-btn focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-btn flex flex-col space-y-4 items-center justify-center w-72"
    >
        <div className='text-2xl whitespace-nowrap'>
            {text1}
        </div>
        <div className='text-xl whitespace-nowrap'>
            {text2}
        </div>
    </button>
      
  )
}

export default ButtonApp