// Write your code here
import './index.css'

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg">
        <div className="inner-bg">
          <h1>
            {' '}
            Bob ate <span className="spcl">{mango}</span> mangoes{' '}
            <span className="spcl">{banana}</span> bananas
          </h1>
          <div className="card">
            <div>
              <img
                className="ima"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <div>
                <button className="btn" onClick={this.onMango}>
                  Eat Mango
                </button>
              </div>
            </div>
            <div>
              <img
                className="ima"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
              />
              <div>
                <button className="btn" onClick={this.onBanana}>
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
