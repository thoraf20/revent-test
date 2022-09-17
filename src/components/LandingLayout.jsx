import React from 'react';
import { Stack } from '@mui/material';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        background: '#000000',
        color: '#fff',
        minHeight: '100vh',
        width: '100vw',
        padding: `${theme.spacing(4)} ${theme.spacing(18)}`,
        paddingBottom: theme.spacing(18),
    },
  }));

export const LandingLayout = ({children}) => {
  const {container} = useStyles();
  return (
    <Stack spacing={10} className={container}>
        {children}
    </Stack>
  )
}
