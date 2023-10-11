import React from 'react'

function ImageGallery(props) {
  return (
    <div className="w-full h-[36vh] bg-black relative rounded-[5px]">
      <img src={props.imagee} alt="" className="absolute inset-0 w-full h-full object-cover rounded-[5px]" />
    </div>
  )
}

export default ImageGallery
