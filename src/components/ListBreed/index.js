import React, { useState, useEffect } from 'react'

import storage from '../../services/storage'
import EventEmitter from '../../services/event'

import './styles.scss'

const ListBreed = () => {
  const [listDogs, setListDogs] = useState(storage.index())

  useEffect(() => {
    console.log(listDogs, 'heree')

    EventEmitter.subscribe('addNewDog', (event) => setListDogs(storage.index()))
  }, [listDogs])

  const handleDeleteDog = (dogId) => {
    setListDogs(listDogs.filter((dog) => dog._id !== dogId))
    
    storage.destroy(dogId)
  }

  return (
    <div className="list-breed-container">
      <h1>My Lovely Dogs</h1>
      <ul className="list-breed">
        {listDogs.map((dog, index) => (
          <li className={`item-breed ${dog.color} ${dog.font}`}>
            <img src={dog.imgUrl} alt={dog.name}/>
            <div className="desc-breed">
              <strong>{dog.name}</strong>
              <p>{dog.breed}</p>
            </div>
            <button
              className="delete-breed"
              onClick={(e) => handleDeleteDog(dog._id)}
            >Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListBreed