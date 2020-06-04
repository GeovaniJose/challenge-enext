import React, { useState, useEffect } from 'react'

import Toast from '../Toast/index'

import api from '../../services/api'
import storage from '../../services/storage'
import EventEmitter from '../../services/event'

import './styles.scss'

// Itens para o select das fontes
const optionFonts = [
  { label: "Bellota" , value: "text-font-1" },
  { label: "Turret Road" , value: "text-font-2" },
  { label: "Kodchasan" , value: "text-font-3" },
  { label: "Oxanium" , value: "text-font-4" },
  { label: "Srisakdi" , value: "text-font-5" },
]

// Itens para o select das cores
const optionColors = [
  { label: "Ice White" , value: "text-color-1" },
  { label: "Factory Yellow" , value: "text-color-2" },
  { label: "Royal Blue" , value: "text-color-3" },
  { label: "Bright Red" , value: "text-color-4" },
  { label: "Fuchsia Pink" , value: "text-color-5" },
]

const FormBreed = () => {
  // Form inputs
  const [name, setName] = useState("")
  const [breed, setBreed] = useState("")
  const [font, setFont] = useState("")
  const [color, setColor] = useState("")
  const [dogImgUrl, setDogImgUrl] = useState("")

  // Itens para o select das raças
  const [optionBreeds, setOptionBreeds] = useState([])

  useEffect(() => {
    // Using an IIFE async
    (async () => {
      const response = await api.get('breeds/list/all')

      // Fetching breeds from API
      setOptionBreeds(Object.keys(response.data.message).map(breed => (
        { label: `${breed[0].toUpperCase()}${breed.slice(1)}`, value: breed }
      )))
    })()
  }, [])

  useEffect(() => {
    (async () => {
      const response = await api.get(`breed/${breed}/images/random`)

      setDogImgUrl(response.data.message)
    })()
  }, [breed])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newDog = {
      name,
      breed,
      font,
      color,
      imgUrl: dogImgUrl
    }
    storage.store(newDog)

    EventEmitter.dispatch('addNewDog', e)
    EventEmitter.dispatch('showToast', e)

    resetForm()
  }

  const resetForm = () => {
    setName("")
    setBreed("")
    setFont("")
    setColor("")
  }

  return (
    <div className="form-breed-container">

      <form onSubmit={handleSubmit}>
        <h1>Add new dog</h1>

        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.currentTarget.value)}
          placeholder="Insert dog name..."
          minLength={3}
          required
        />

        <select
          name="breed-selector"
          value={breed}
          onChange={e => setBreed(e.currentTarget.value)}
          required
        >
          <option value="" disabled>Select breed...</option>
          {optionBreeds.map(({label, value}) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>

        <select
          name="text-font"
          value={font}
          onChange={e => setFont(e.currentTarget.value)}
          required
        >
          <option value="">Select text font...</option>
          {optionFonts.map(({label, value}) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>

        <select
          name="text-color"
          value={color}
          onChange={e => setColor(e.currentTarget.value)}
          required
        >
          <option value="">Select text color...</option>
          {optionColors.map(({label, value}) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>

        <button type="submit">Save</button>
      </form>

      <Toast message="Lovely dog successfully added" />
    </div>
  )
}

export default FormBreed