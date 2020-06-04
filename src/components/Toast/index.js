import React, { useEffect, useRef } from 'react'

import EventEmitter from '../../services/event'

import './styles.scss'

const Toast = ({ message }) => {
  const toastEl = useRef(null);

  useEffect(() => {
    EventEmitter.subscribe('showToast', (event) => {
      toastEl.current.classList.toggle('show')
      setTimeout(() => { toastEl.current.classList.toggle('show') }, 3000);
    })
  }, [])

  return (
    <div ref={toastEl} className="toast-container">
      <article>{message}</article>
    </div>
  )
}

export default Toast