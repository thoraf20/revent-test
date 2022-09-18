import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Diamond, Be, Ball, Facebook, Yellow } from '../assets/svg';
import {makeStyles} from '@mui/styles';


const first = {
	fontSize: '2.18rem',
	fontWeight: '600 !important',
	margin: '20px 0',
};

const second = {
	fontSize: '1.3rem',
	fontWeight: '400 !important',
	margin: '20px 0',
	color: '#FFFFFF !important',
};

const btn = {
	color: '#000000 !important',
	fontWeight: '700 !important',
	fontSize: '1.2rem !important',
	width: 'max-content !important',
	borderRadius: '10px !important',
	background: '#FCE82F !important',
	padding: `15px 40px !important`,
	textTransform: 'none !important',
};

const circle = {
	background: '#FCE82F !important',
	width: '45px',
	height: '45px',
	borderRadius: '50%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	textAlign: 'center',
	marginRight: '10px',
	cursor: 'pointer',
};


const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: theme.spacing(5),
      width: '100%',
      '@media (max-width: 1224px)': {
        flexDirection: 'column-reverse',
      },
    },
    left: {
      width: '50%',
      '@media (max-width: 1224px)': {
        width: '100%',
        '& br': {
          display: 'none'
        }
      },
    },
    right: {
      position: 'relative',
      '& svg': {
        width: '100%',
      }
    }
  }));

export const MainMenu = () => {
  const {container, left, right} = useStyles();

	return (
		<Box className={container}>
			<Box className={left}>
				<Typography sx={first}>
					Innovative  Solution <br/> Taliored to your <br/>  Business need
				</Typography>
				<Typography sx={second}>
					We can partner with your business to provide a symbiotic relationship
					and synergy to help you or your business achieve more business growth
					through strategic financial advisory, investment business and human
					resource planning and management.​
				</Typography>

				<Button sx={btn} variant='contained'>
					Get in touch
				</Button>

				<Box sx={{ display: 'flex', mt: 4 }}>
					<Box sx={circle} variant='contained'>
						<Be />
					</Box>
					<Box sx={circle} variant='contained'>
						<Ball />
					</Box>
					<Box sx={circle} variant='contained'>
						<Facebook />
					</Box>
				</Box>
			</Box>
			<Box className={right}>
				<Yellow />
				<Box sx={{ position: 'absolute', top: '-2rem' }}>
					<Diamond />
				</Box>
			</Box>
		</Box>
	);
};
