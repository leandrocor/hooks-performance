import React from "react"

const PointsComponent = ({ points }) => {
  console.log("Render Points")
  return <p>Story point: {points}</p>
}

export const Points = React.memo(PointsComponent, (prevProps, nextProps) => {
  return prevProps.points === nextProps.points
})
