// Write your code here

import {AiFillCalendar} from 'react-icons/ai'

import {
  ProjectTimelineContainer,
  Image,
  AnchorElement,
  HeadingElement,
  Description,
  HeadingContainer,
  IconContainer,
} from './styledComponents'

const ProjectTimelineCard = props => {
  const {eachTimeline} = props
  const {
    imageUrl,
    projectTitle,
    description,
    duration,
    projectUrl,
  } = eachTimeline
  return (
    <ProjectTimelineContainer>
      <Image alt="project" src={imageUrl} />
      <HeadingContainer>
        <HeadingElement>{projectTitle}</HeadingElement>
        <IconContainer>
          <AiFillCalendar />
          <Description>{duration}</Description>
        </IconContainer>
      </HeadingContainer>

      <Description>{description}</Description>
      <AnchorElement href={projectUrl}>Visit</AnchorElement>
    </ProjectTimelineContainer>
  )
}

export default ProjectTimelineCard
