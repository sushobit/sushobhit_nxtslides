import {Component} from 'react'
import './index.css'
import SlidesItem from '../SlidesItem'
import SliderContext from '../../Context'
import SelectedSlide from '../SelectedSlide'

class SlidesList extends Component {
  render() {
    return (
      <SliderContext.Consumer>
        {value => {
          const {initialList} = value
          return (
            <div className="slides-container">
              <ol className="slides-list">
                {initialList.map((eachSlide, index) => (
                  <SlidesItem
                    details={eachSlide}
                    key={eachSlide.id}
                    serialNumber={index + 1}
                  />
                ))}
              </ol>
              <SelectedSlide />
            </div>
          )
        }}
      </SliderContext.Consumer>
    )
  }
}

export default SlidesList
