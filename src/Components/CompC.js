import React, { useContext } from 'react'
import { ChannelContext, NameContext } from '../App'

function CompC() {
   const myName = useContext(NameContext)
   const myChannel = useContext(ChannelContext)
  return (
    <div>
    <h1>HELLO JI C</h1>
    <h1>{myName}</h1>
    <h1>{myChannel}</h1>
    </div>
  )
}

export default CompC