import React from "react"

const StatusContainer = ({ status, handleStatus }) => {
  console.log("render Status")

  const printStatusValue = () => {
    switch (status) {
      case 1:
        return "Hoy"
      case 2:
        return "En proceso"
      case 3:
        return "Finalizada"
      default:
        return "nada"
    }
  }

  return (
    <div>
      <h2>{printStatusValue()}</h2>
      <select value={status} onChange={handleStatus}>
        <option value={1}>Hoy</option>
        <option value={2}>En proceso</option>
        <option value={3}>Finalizada</option>
      </select>
    </div>
  )
}

export const Status = React.memo(StatusContainer, (prevProps, nextProps) => {
  return prevProps.status === nextProps.status
})
