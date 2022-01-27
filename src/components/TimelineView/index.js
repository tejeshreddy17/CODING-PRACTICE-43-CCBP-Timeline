// Write your code here

import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import {ChronoContainer} from './styledComponents'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <ChronoContainer>
      <h1>MY JOURNEY OF CCBP 4.0</h1>

      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={timelineItemsList.map(eachTimeline => ({
          title: eachTimeline.title,
        }))}
      >
        {timelineItemsList.map(eachTimeline => {
          if (eachTimeline.categoryId === 'PROJECT') {
            return <ProjectTimelineCard eachTimeline={eachTimeline} />
          }
          return <CourseTimelineCard eachTimeline={eachTimeline} />
        })}
      </Chrono>
    </ChronoContainer>
  )
}

export default TimelineView
