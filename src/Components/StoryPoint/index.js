import React from "react"

const StoryPointContainer = ({ handleStoryPoint }) => {
  console.log("Render StoryPoint")
  return <button onClick={handleStoryPoint}>Increse Story Points</button>
}

export const StoryPoint = React.memo(
  StoryPointContainer,
  (prevProps, nextProps) => {
    return prevProps.handleStoryPoint === nextProps.handleStoryPoint
  }
)
