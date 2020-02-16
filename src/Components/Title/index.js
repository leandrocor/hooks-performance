import React from "react"

const TitleComponent = ({ title }) => {
  console.log("Render title")
  return (
    <>
      <p>Task title:</p>
      <h2>{title}</h2>
    </>
  )
}

export const Title = React.memo(TitleComponent, (prevProps, nextProps) => {
  return prevProps.title === nextProps.title
})
