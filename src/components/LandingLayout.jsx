import React from 'react';
import { Box } from '@mui/material';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        background: '#000000',
        color: '#fff',
        height: '100vh',
        padding: `${theme.spacing(4)} ${theme.spacing(18)}`
    },
  }));

export const LandingLayout = ({children}) => {
  const {container} = useStyles();
  return (
    <Box className={container}>
        {children}
    </Box>
  )
}
