import {Component} from 'react'

import './index.css'

const plusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  renderAnswerHideOrShow = () => {
    const {isActive} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails

    if (isActive) {
      return (
        <div>
          <hr />
          <p>{answerText}</p>
        </div>
      )
    }
    return null
  }

  onClickBtn = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  //   renderQuestionHideOrShowBtn = () => {
  //     const {isActive} = this.state

  //     const buttonImg = isActive ? minusImage : plusImage
  //     const buttonAltText = isActive ? 'minus' : 'plus'

  //     return (
  //       <button type="button" onClick={this.onClickBtn} className="btn">
  //         <img src={buttonImg} alt={buttonAltText} />
  //       </button>
  //     )
  //   }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    const {isActive} = this.state

    const buttonImg = isActive ? minusImage : plusImage
    const buttonAltText = isActive ? 'minus' : 'plus'

    return (
      <li>
        <div className="item-container">
          <div className="question-container">
            <h1 className="question">{questionText}</h1>
            <button type="button" onClick={this.onClickBtn} className="btn">
              <img src={buttonImg} alt={buttonAltText} />
            </button>
            {/* {this.renderQuestionHideOrShowBtn()} */}
          </div>
          {this.renderAnswerHideOrShow()}
        </div>
      </li>
    )
  }
}
export default FaqItem
