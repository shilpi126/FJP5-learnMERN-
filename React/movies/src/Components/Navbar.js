import React, { Component } from 'react'

export default class navbar extends Component {
  render() {
    return (
     <div style = {{ display:"flex",background:"lightblue",color:"white", padding:"1rem",justifyContent:"center",alignItems:"center"}}>
      <h1 >Movie App</h1>
      <h2>Favorites</h2>
      </div>
    )
  }
}
