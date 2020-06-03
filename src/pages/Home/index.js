import React from 'react'

import FormBreed from '../../components/FormBreed'
import ListBreed from '../../components/ListBreed'

import './styles.scss'

const Home = () => {
  return (
    <main className="main-container">
      <FormBreed />
      <ListBreed />
    </main>
  )
}

export default Home