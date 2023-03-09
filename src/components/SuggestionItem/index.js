// Write your code here
import './index.css'

import {Component} from 'react'

class SuggestionItem extends Component {
  onChangeUpdateList = () => {
    const {searchInfo, onUpdateList} = this.props
    const {suggestion} = searchInfo
    onUpdateList(suggestion)
  }

  render() {
    const {searchInfo} = this.props
    const {suggestion} = searchInfo
    return (
      <li className="search-item-container">
        <p>{suggestion}</p>
        <img
          className="arrow-item"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          onClick={this.onChangeUpdateList}
          alt="arrow-icon"
        />
      </li>
    )
  }
}

export default SuggestionItem
