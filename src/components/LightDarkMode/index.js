import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {background: true}

  onChange = () => {
    this.setState(prevState => ({background: !prevState.background}))
  }

  onTextChange = () => {
    const {background} = this.state

    return background ? 'Light Mode' : 'Dark Mode'
  }

  render() {
    const {background} = this.state
    const buttonText = this.onTextChange()
    const modeClassName = background ? 'dark-mode' : 'light-mode'

    return (
      <div className="container">
        <div className={`sub-container ${modeClassName}`}>
          <h1 className="heading">Click to Change Mode</h1>
          <button onClick={this.onChange} className="button1" type="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
