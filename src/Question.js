import React, { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'

export const Question = ({id, title, info}) => {
    const [query, setQuery] = useState(false)

  return (
    <div key={id} className='question'>
      <h3>{title}</h3>
      <button className="btn" onClick={() => setQuery(!query)}>
        {query ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>
      <p>{query && info}</p>
    </div>
  )
}
