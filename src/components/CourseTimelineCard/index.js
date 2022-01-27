// Write your code here
import {AiFillClockCircle, AiFillCalendar} from 'react-icons/ai'

import {
  CourseTimelineContainer,
  TagContainer,
  Tags,
  Heading,
  Description,
  HeadingContainer,
  IconContainer,
  DurationDescirption,
} from './styledComponents'

const CourseTimelineCard = props => {
  const {eachTimeline} = props
  const {tagsList, courseTitle, description, duration} = eachTimeline
  return (
    <CourseTimelineContainer>
      <HeadingContainer>
        <Heading>{courseTitle}</Heading>
        <IconContainer>
          <AiFillClockCircle />
          <DurationDescirption>{duration}</DurationDescirption>
        </IconContainer>
      </HeadingContainer>
      <Description>{description}</Description>
      <TagContainer>
        {tagsList.map(eachTag => (
          <Tags key={eachTag.id}>{eachTag.name}</Tags>
        ))}
      </TagContainer>
    </CourseTimelineContainer>
  )
}

export default CourseTimelineCard
