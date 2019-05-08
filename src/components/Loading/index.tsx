import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
interface ILoadingComp {
  state: {
    visible: boolean
  }
}
class LoadingComp extends Component<any, ILoadingComp["state"]> {
  state = {
    visible: false
  }
  constructor(props) {
    super(props)
  }
  render() {
    const {visible} = this.state
    return (
      <>
      {
        visible && 
        <div 
        className='loading-container'
        onClick={this.hide}
        >

        </div>
      }
      </>
    )
  }

  private toggleLoading = (flag: boolean) => {
    this.setState(preState => {
      return {visible: flag}
    })
  }

  show = (prompt?: string) => {
    this.toggleLoading(true)
  }

  private hide = () => {
    this.toggleLoading(false)
  }
}
const mountNode = document.createElement('div')
document.body.appendChild(mountNode)
const Loading = ReactDOM.render(<LoadingComp />, mountNode)
export default Loading as LoadingComp
