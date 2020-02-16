import React, { useState, useCallback } from "react"
import { Priority } from "./Components/Priority"
import { Title } from "./Components/Title"
import { Status } from "./Components/Status"
import { StoryPoint } from "./Components/StoryPoint"
import { Points } from "./Components/Points"

export const App = () => {
  const [priority, setPriority] = useState("alta")
  const [points, setPoints] = useState(0)
  const [status, setStatus] = useState(1)

  const handlePriority = useCallback(
    e => {
      setPriority(e.target.value)
    },
    [setPriority]
  )

  const handleStatus = useCallback(
    e => {
      setStatus(JSON.parse(e.target.value))
    },
    [setStatus]
  )

  const handleStoryPoint = useCallback(() => {
    setPoints(p => p + 1)
  }, [setPoints])

  return (
    <div>
      <Points points={points} />
      <hr />
      <StoryPoint handleStoryPoint={handleStoryPoint} />
      <hr />
      <Title title={"Banner para campaña Coca-Cola"} />
      <hr />
      <Priority priority={priority} handlePriority={handlePriority} />
      <hr />
      <Status status={status} handleStatus={handleStatus} />
      <hr />
    </div>
  )
}

/* const button = useMemo(() => {
    return <StoryPoint handleStoryPoint={handleStoryPoint} />
  }, []) */
