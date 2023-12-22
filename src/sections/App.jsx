import React from 'react'
import { btnItems } from '../constants'
import { ButtonApp } from '../components'
import { NavLink } from 'react-router-dom'

const App = () => {
  return (
    <div className='bg-bgc text-white grow'>
      <main className='container mx-auto px-4 sm:px-6 lg:px-8 flex items-center flex-col space-y-6 mt-16'>
        <h2 className='text-xl'>Node.js® is an open-source, cross-platform JavaScript runtime environment.</h2>
        <h3 className='text-2xl mt-6'>Download Node.js®</h3>

        <div className='flex space-x-6'>
          {
              btnItems.map((item) => (
                <ButtonApp key={item.text1}  text1={item.text1} text2={item.text2}/>
              ))
          }
        </div>

        <div className='text-xl'>
          For information about supported releases, see the <NavLink className={`text-btn`}>release schedule.</NavLink>
        </div>
      </main>
    </div>
  )
}

export default App