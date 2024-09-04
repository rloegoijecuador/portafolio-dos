import React from 'react'
import img from '../../public/descarga.jfif'

const Index = () => {
  return (
    <div>
      <div>
        <h4 className='incio'>hello, it`s me</h4>
        <h1 className="name">IGOR BENAVIDES</h1>
        <h5 className="title">desarollador fron-ted</h5>
        <h5 className="title-end">I`m a passionate in programing</h5>
      </div>
      <div className="img">
        <img src={img} alt="img" />
      </div>
    </div>
  )
}

export default Index
