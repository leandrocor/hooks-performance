import React from "react"

const StoryPointComponent = ({ handleStoryPoint }) => {
  console.log("Render StoryPoint")
  return <button onClick={handleStoryPoint}>Increse Story Points</button>
}

export const StoryPoint = React.memo(
  StoryPointComponent,
  (prevProps, nextProps) => {
    return prevProps.handleStoryPoint === nextProps.handleStoryPoint
  }
)
