import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Box from '@mui/material/Box';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function TimelineKegiatan() {
  return (
    <React.Fragment>
    <Box style={{backgroundColor: '#C2BC9A', paddingBottom:'5vh', paddingTop: '5vh', borderTopLeftRadius: "20px", borderTopRightRadius: "20px", color:'#554B3F'}}>
        <div style={{textAlign:'center', fontSize:'4rem'}}>Timeline KPGTS 2021/2022</div>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary" style={{fontSize:'2rem'}}>
            09:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent style={{fontSize:'2rem'}}>Over Bufferflow</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary" style={{fontSize:'2rem'}}>
            10:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent style={{fontSize:'2rem'}}>Turing Machine</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary" style={{fontSize:'2rem'}}>
            12:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent style={{fontSize:'2rem'}}>Memory Fountain</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary" style={{fontSize:'2rem'}}>
            9:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent style={{fontSize:'2rem'}}>Die</TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
    </React.Fragment>
  );
}
