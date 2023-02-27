//this is one card sample

import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const BasicCard = (props) => {
  const {inffectData, currentDate, desc} = props;
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Inffected
        </Typography>
        <Typography variant="h5" component="div">
          {props.inffectData}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.currentDate}
        </Typography>
        <Typography variant="body2">
          Number of {props.desc} cases of COVID-19.
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

export default BasicCard;