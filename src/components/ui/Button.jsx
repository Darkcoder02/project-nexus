import React from 'react'

function Button({type, placeholder}) {
  return (
    <button type={type} className="bg-orange-400 p-2 rounded-xl text-white">
      {placeholder}
    </button>
  )
}

export default Button