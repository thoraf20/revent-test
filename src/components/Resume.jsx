import { Box, Typography } from '@mui/material';
import React from 'react';
import { SectionLayout } from './SectionLayout';

const container = {
	width: '100%',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	margin: '20px 0',
  flexWrap: 'wrap'
};

const date = {
	padding: '10px 20px',
	fontSize: '1.5rem',
	fontWeight: '700 !important',
};

const school = {
	padding: '10px 20px',
	fontSize: '1.4rem',
	fontWeight: '500 !important',
};

const course = {
	padding: '15px 20px',
	fontSize: '1.2rem',
	fontWeight: '500 !important',
};
export const Resume = () => {
	return (
		<SectionLayout title='Resume'>
			<Box id="experience" sx={container}>
				<Box sx={{ display: 'flex' }}>
					<Box sx={{ borderLeft: '6px solid #FCE82F' }}></Box>
					<Box>
						<Typography sx={date}>2017</Typography>
						<Typography sx={school}>Louisanna State University</Typography>
						<Typography sx={course}>Lorem Ipseum</Typography>

						<Typography sx={date}>2018</Typography>
						<Typography sx={school}>Havard EdX</Typography>
						<Typography sx={course}>Principles of Design</Typography>
					</Box>
				</Box>

				<Box sx={{ display: 'flex' }}>
					<Box sx={{ borderLeft: '6px solid #FCE82F' }}></Box>
					<Box>
						<Typography sx={date}>2019</Typography>
						<Typography sx={school}>Udacity</Typography>
						<Typography sx={course}>Product Design</Typography>

						<Typography sx={date}>2020</Typography>
						<Typography sx={school}>Microsoft Partner</Typography>
						<Typography sx={course}>Platinum</Typography>
					</Box>
				</Box>
			</Box>
		</SectionLayout>
	);
};
