import React from 'react'

export default function Dotedline() {
  return (
    <svg
    className="w-full h-20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10,50 Q 50,10 90,50 T 170,50"
      stroke="black"
      strokeWidth="2"
      fill="transparent"
      strokeDasharray="4,4"
    />
  </svg>
  )
}
