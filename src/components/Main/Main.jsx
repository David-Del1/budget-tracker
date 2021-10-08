import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { ExpenseTrackerContext } from '../../context/context';
import InfoCard from '../InfoCard/InfoCard.jsx';

import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List.jsx';

function Main() {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext)

  return (
    <Card>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography variant="h5" align="center">
          Total Balance: ${balance}
        </Typography>
        <Typography
          variant="subtitle2"
          style={{ lineHeight:'1.5em', marginTop: '20px'}}
        >

          <InfoCard />
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Main;
