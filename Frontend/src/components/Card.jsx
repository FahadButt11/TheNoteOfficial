import React from 'react'

const Card = (props) => {
  return (
    <div className='card flex flex-wrap shadow-md m-10 p-10'>
        <h1 className='title font-extrabold'>{props.title}</h1>
        <p className='body text-left'>{props.body}</p>
    </div>
  )
}

export default Card
