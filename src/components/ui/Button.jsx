import React from 'react'

function Button({type, placeholder}) {
  return (
    <button type={type} className="bg-blue-400 p-2 rounded-xl">
      {placeholder}
    </button>
  )
}

export default Button