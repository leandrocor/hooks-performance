import React from "react"

export const Title = ({ title }) => {
  console.log("Render title")
  return (
    <>
      <p>Task title:</p>
      <h2>{title}</h2>
    </>
  )
}
