import { Box, Typography } from '@mui/material'
import React from 'react';

import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    sectionContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: `${theme.spacing(3.75)} !important`,
        fontWeight: '700 !important',
        position: 'relative',
        marginBottom: `${theme.spacing(3.75)} !important`,
        '&:before': {
            content:'""',
            position: 'absolute',
            bottom: -5,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderBottom: '8px solid #FCE82F',
            borderLeft: '146px solid transparent',
        }
    },
  }));

export const SectionLayout = ({children, title}) => {
  const {sectionTitle, sectionContainer} = useStyles()
  return (
    <Box className={sectionContainer}>    
        <Typography className={sectionTitle}>
            {title}
        </Typography>
        <Box>{children}</Box>
    </Box>
  )
}
