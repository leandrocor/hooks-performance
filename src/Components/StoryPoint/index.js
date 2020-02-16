import React from "react"

export const StoryPoint = ({ handleStoryPoint }) => {
  console.log("Render StoryPoint")
  return <button onClick={handleStoryPoint}>Increse Story Points</button>
}
