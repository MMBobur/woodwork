import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

export default function SimpleAccordion({titles}) {
  return (
    <div>
        {titles.map((item, index)=>(
            <Accordion sx={{marginBottom:'5%',}} key={index}>
                <AccordionSummary
                sx={{borderRadius:'0px',marginBottom:'10px', background:'white'}}
                expandIcon={<AddIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography sx={{marginTop:'10px', fontWeight:600}}>{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {item.text}
                </Typography>
                </AccordionDetails>
            </Accordion>
        ))}
    </div>
  );
}
