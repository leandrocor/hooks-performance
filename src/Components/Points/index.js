import React from "react"

const PointsContainer = ({ points }) => {
  console.log("Render Points")
  return <p>Story point: {points}</p>
}

export const Points = React.memo(PointsContainer, (prevProps, nextProps) => {
  return prevProps.points === nextProps.points
})
