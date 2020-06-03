import React from 'react'

import './styles.scss'
import dogImg from './dog-img.jpg'

const ListBreed = () => {
  return (
    <div className="list-breed-container">
      <h1>My Lovely Dogs</h1>
      <ul className="list-breed">
        <li className="item-breed">
          <img src={dogImg} alt="The Dog"/>
          <p className="desc-breed">
            <strong>Nome dog</strong>
            <p>Raça dog</p>
          </p>
        </li>
        <li className="item-breed">
          <img src={dogImg} alt="The Dog"/>
          <p className="desc-breed">
            <strong>Nome dog</strong>
            <p>Raça dog</p>
          </p>
        </li>
        <li className="item-breed">
          <img src={dogImg} alt="The Dog"/>
          <p className="desc-breed">
            <strong>Nome dog</strong>
            <p>Raça dog</p>
          </p>
        </li>
        <li className="item-breed">
          <img src={dogImg} alt="The Dog"/>
          <p className="desc-breed">
            <strong>Nome dog</strong>
            <p>Raça dog</p>
          </p>
        </li>
      </ul>
    </div>
  )
}

export default ListBreed