import React from "react"

const PriorityContainer = ({ priority, handlePriority }) => {
  console.log("Render Priority")

  return (
    <>
      <h2>{priority.charAt(0).toUpperCase() + priority.slice(1)}</h2>
      <select value={priority} onChange={handlePriority}>
        <option value="alta">alta</option>
        <option value="baja">baja</option>
        <option value="media">media</option>
      </select>
    </>
  )
}

export const Priority = React.memo(
  PriorityContainer,
  (prevProps, nextProps) => {
    return prevProps.priority === nextProps.priority
  }
)
