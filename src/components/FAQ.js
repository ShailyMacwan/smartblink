import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AccordionExpandIcon() {
  const accordionItems = [
    { question: 'Question', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.' },
    { question: 'Question', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.' },
    { question: 'Question', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.' },
    { question: 'Question', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.' },
    { question: 'Question', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.' },
    { question: 'Question', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.' }
  ];

  const accordionStyle = {
    questionColor: '#194E86',
    answerColor: 'black',
  };

  return (

    <div style={{ backgroundColor: '#f0f0f0', height:'100vh', padding:'2rem' }}>


    <div style={{
      margin: '6%',
      padding: '5%',
      backgroundColor:'white',
      boxShadow: '1px 1px 10px 0px grey'
    }}>
      <h3 className='text-center pb-2 fw-bold' style={{color:'#194E86'}}>FREQUENTLY ASKED QUESTIONS</h3>
      
      {accordionItems.map((item, index) => (
        <Accordion key={index} style={{ color: accordionStyle.questionColor }}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            <Typography style={{ color: accordionStyle.questionColor }}>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ color: accordionStyle.answerColor }}>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      
    </div>
    </div>
  );
}
