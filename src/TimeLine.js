import React from 'react'
import {RiPsychotherapyFill} from 'react-icons/ri'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const TimeLine = () => {
  return (
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'linear-gradient(to left, #4568dc, #b06ab3)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="STEP 1"
    iconStyle={{ background: '#4568dc', color: '#fff' }}
    icon={<RiPsychotherapyFill />}
  >
    <h3 className="vertical-timeline-element-title">PACKAGE ONE</h3>
    <h4 className="vertical-timeline-element-subtitle">$100</h4>
    <p>
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, suscipit?
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'linear-gradient(to left, #4568dc, #b06ab3)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="STEP 2"
    iconStyle={{ background: '#4568dc', color: '#fff' }}
    icon={<RiPsychotherapyFill />}
  >
    <h3 className="vertical-timeline-element-title">PACKAGE TWO</h3>
    <h4 className="vertical-timeline-element-subtitle">$200</h4>
    <p>
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, non!
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'linear-gradient(to left, #4568dc, #b06ab3)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="STEP 3"
    iconStyle={{ background: '#4568dc', color: '#fff' }}
    icon={<RiPsychotherapyFill />}
  >
    <h3 className="vertical-timeline-element-title">PACKAGE THREE </h3>
    <h4 className="vertical-timeline-element-subtitle">$300</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'linear-gradient(to left, #4568dc, #b06ab3)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="STEP 4"
    iconStyle={{ background: '#4568dc', color: '#fff' }}
    icon={<RiPsychotherapyFill />}
  >
    <h3 className="vertical-timeline-element-title">PACKAGE FOUR</h3>
    <h4 className="vertical-timeline-element-subtitle">$400</h4>
    <p>
    Lorem ipsum dolor sit amet.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'linear-gradient(to left, #4568dc, #b06ab3)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="STEP 5"
    iconStyle={{ background: '#b06ab3', color: '#fff' }}
    icon={<RiPsychotherapyFill />}
  >
    <h3 className="vertical-timeline-element-title">PACKAGE FIVE</h3>
    <h4 className="vertical-timeline-element-subtitle">$500</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur.
    </p>
    <button>book now</button>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'linear-gradient(to left, #4568dc, #b06ab3)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="STEP 6"
    iconStyle={{ background: '#b06ab3', color: '#fff' }}
    icon={<RiPsychotherapyFill />}
  >
    <h3 className="vertical-timeline-element-title">PACKAGE SIX</h3>
    <h4 className="vertical-timeline-element-subtitle">$600</h4>
    <p>
     Lorem ipsum dolor sit amet consectetur adipisicing.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'linear-gradient(to left, #4568dc, #b06ab3)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="STEP 7"
    iconStyle={{ background: '#b06ab3', color: '#fff' }}
    icon={<RiPsychotherapyFill />}
  >
    <h3 className="vertical-timeline-element-title">PACKAGE SEVEN</h3>
    <h4 className="vertical-timeline-element-subtitle">$700</h4>
    <p>
      Lorem ipsum dolor sit.
    </p>
  </VerticalTimelineElement>
  {/* <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<RiPsychotherapyFill />}
  /> */}
</VerticalTimeline>
  )
}

export default TimeLine