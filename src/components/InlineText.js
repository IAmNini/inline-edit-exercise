import React, { useState } from 'react';


export default function InlineText() {

  const [text, setText] = useState('Hello World')
  const [status, setStatus] = useState('')
  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    setText(event.target.value)
  }

  const handleFocusOff = (event) => {
    event.preventDefault()
    new Promise((resolve, reject) => {
      // console.log({text})
      setStatus('loading')
      setTimeout(() => {
        if ({ text }.text === 'Thanks for all the fish') {
          resolve('Success!')
          setStatus('success')
          setMessage('')
        } else {
          reject('Oops! Something has gone terribly wrong!')
          setStatus('error')
          setMessage('Oops! Something has gone terribly wrong!')
        }
      }, 1000)
    })
  }

  return (
    <div className="outer-container">
      <form onSubmit={handleFocusOff}>
        <div className="row1">
          <input type="text" value={text} onChange={handleChange} onBlur={handleFocusOff} />
          <div className={status}></div>
        </div>
        <p className="message">{message}</p>
      </form>
    </div>
  )

}