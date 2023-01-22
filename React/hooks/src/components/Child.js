import React from 'react'
console.log("Child");

function Child() {
  return (
    <div>Child</div>
  )
}

export default React.memo(Child);