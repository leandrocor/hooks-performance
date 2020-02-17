import React, { useState, useCallback, useMemo } from "react"
import { Priority } from "./Components/Priority"
import { Title } from "./Components/Title"
import { Status } from "./Components/Status"
import { StoryPoint } from "./Components/StoryPoint"
import { Points } from "./Components/Points"

const title = "Banner para campaña Coca-Cola"

export const App = () => {
  const [priority, setPriority] = useState("alta")
  const [points, setPoints] = useState(0)
  const [status, setStatus] = useState(1)
  /* 
  const handlePriority = e => {
    setPriority(e.target.value)
  } */

  const handlePriority = useCallback(
    e => {
      setPriority(e.target.value)
    },
    [setPriority]
  )

  /* const handleStatus = e => {
    setStatus(JSON.parse(e.target.value))
  } */

  const handleStatus = useCallback(
    e => {
      setStatus(JSON.parse(e.target.value))
    },
    [setStatus]
  )

  /* const handleStoryPoint = () => {
    setPoints(p => p + 1)
  } */

  const handleStoryPoint = useCallback(() => {
    setPoints(estadoActual => estadoActual + 1)
  }, [setPoints])

  /* const title = useMemo(() => {
    return "Banner para campaña Coca-Cola"
  }, []) */

  const returnTitle = useMemo(() => {
    return <Title title={title} />
  }, [title])

  return (
    <div>
      <Points points={points} />
      <hr />
      <StoryPoint handleStoryPoint={handleStoryPoint} />
      <hr />
      {returnTitle}
      <hr />
      <Priority priority={priority} handlePriority={handlePriority} />
      <hr />
      <Status status={status} handleStatus={handleStatus} />
      <hr />
    </div>
  )
}
