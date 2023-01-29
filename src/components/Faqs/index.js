import {Component} from 'react'
import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="app-container">
        <div className="faqs-container">
          <h1 className="heading">FAQs</h1>
          <ul className="faqs-item-container">
            {faqsList.map(eachFaq => (
              <FaqItem
                faqDetails={eachFaq}
                key={eachFaq.id}
                onClick={this.clickPlusButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
