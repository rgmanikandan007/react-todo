import React from 'react'
import Child from './Child'

function Parent() {
    const message = "Hello i am parent"
  return (
    <div>
        <Child greetings={message} />
    </div>
  )
}

export default Parent