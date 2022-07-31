import React from 'react'
import Image from 'next/image'

const Images = () => {
  return (
    <div className="prodimg">
      <Image src="/metal.png" alt="steel" className='prodimg'
        width={50}
        height={50} />
    </div>
  )
}

export default Images