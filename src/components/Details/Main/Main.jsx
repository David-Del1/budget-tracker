import React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import useStyles from './styles';

function Main() {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography variant="h5" align="center">
          Total Balance: $100
        </Typography>
        <Typography
          variant="subtitle"
          style={{ lineHeight:'1.5em', marginTop: '20px'}}
        > 
          Try Saying: Add income for $100 in Category Salary for Monday...
        </Typography>
        <Divider />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* <List /> */}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Main;
