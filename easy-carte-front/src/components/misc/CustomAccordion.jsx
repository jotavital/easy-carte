import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function CustomAccordion({ title, content }) {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<AddCircleOutlineIcon />} >
                <Typography>
                    {title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                {content}
            </AccordionDetails>
        </Accordion>
    );
}

export default CustomAccordion;