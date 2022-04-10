import React, { Component } from 'react'

export default class Album extends Component {
  render() {
    return (
        <header class="album__search-container">
            <form class="album__search-form">
                <input id="album__searchbar" type="text" placeholder="Search..." required/>
                <button class="album__icon-container"><img src="./images/search-icon.png" alt="icon"/></button>
            </form>
        </header>
    )
  }
}
