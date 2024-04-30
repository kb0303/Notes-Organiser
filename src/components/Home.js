import React from 'react'
import Notes from './Notes'

const Home = (props) => {
  const { showAlert } = props
  return (
    <div className='container mt-5'>

      <Notes showAlert={showAlert} />

    </div>
  )
}

export default Home