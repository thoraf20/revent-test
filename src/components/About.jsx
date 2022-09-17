import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { SectionLayout } from './SectionLayout'
import { AbtImage } from '../assets/svg';

const container = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px'
}

const first = {
  fontSize: '1.5rem',
  fontWeight: '600 !important',
  margin: '20px 0'
}

const second = {
  fontSize: '1.3rem',
  fontWeight: '400 !important',
  margin: '20px 0',
  color: "#FFFFFF !important",
}

const third = {
  fontSize: '1.3rem',
  fontWeight: '400 !important',
  margin: '29px 0',
  color: "#FFFFFF !important",
}

const btn = {
  color: "#000000 !important",
  fontWeight: '700 !important',
  fontSize: '1.2rem !important',
  width: 'max-content !important',
  borderRadius: '10px !important',
  background: '#FCE82F !important',
  padding: `15px 30px !important`,
  textTransform: 'none !important'
}
export const About = () => {

  return (
    <SectionLayout title="About us">
      <Box style={container}>
        <Box>
          <AbtImage />
        </Box>
        <Box sx={{padding: "15px 30px"}}>
          <Typography sx={first}>
            We focus on value and excellence
          </Typography>
          <Typography sx={second}>
            We are focused on providing products which deliver demonstrably good value for our clients and end-customers – be that a specific return, outperforming an index or achieving returns at lower risk.​
            </Typography>
          <Typography sx={third}>
            Through achieving value for the clients whose assets we manage, efficiently controlling costs, effectiveness and efficiency, we deliver value to our shareholders and wider stakeholders​
          </Typography>

          <Button sx={btn} variant="contained">Work with us</Button>
        </Box>
      </Box>
    </SectionLayout>
  )
}
