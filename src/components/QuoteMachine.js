import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';


const QuoteMachine = ({assignNewQuoteIndex, selectedQuote}) => (
    <Card>
        <CardContent>
        {
        selectedQuote ? 
        (
            <Typography>
                {selectedQuote.quote} = {selectedQuote.author}
            </Typography>
        ) : null
        }
        </CardContent>
        <CardActions>
            <Button size="small" onClick={assignNewQuoteIndex}>Next</Button>
            <IconButton
                href={`https://twitter.com/intent/tweet`}
                target="_blank"
            >
                <FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
            </IconButton>
        </CardActions>
    </Card>
);

export default QuoteMachine;
