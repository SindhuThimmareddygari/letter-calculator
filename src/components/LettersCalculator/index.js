import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeText = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <div className="phrase-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-phrase-container">
              <label className="phrase-text" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                type="text"
                placeholder="Enter The Phrase"
                className="input"
                id="phraseText"
                onChange={this.onChangeText}
              />
              <p className="letter-text">No.of letters: {count}</p>
            </div>
          </div>

          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
            className="letter-img"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
