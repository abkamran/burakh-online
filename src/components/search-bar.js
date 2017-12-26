import React from 'react'

export default class SearchBar extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <input onChange={event => console.log(event.target.value)}
    )
  }
}
