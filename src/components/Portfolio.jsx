import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import { makeStyles } from '@mui/styles';
import Tab from '@mui/material/Tab';
import { SectionLayout } from './SectionLayout';
import { PortfolioImg } from '../assets/svg';
import imgSrc from '../assets/svg/Rectangle.png'

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	tab: {
		color: '#fff !important',
		textTransform: 'none !important',
		borderRadius: '5px !important',
		'&.Mui-selected': {
			color: '#000 !important',
			backgroundColor: '#fff',
			fontWeight: '700',
		},
		'&.Mui-focusVisible': {
			backgroundColor: 'rgba(100, 95, 228, 0.32)',
		},
	},
	tabs: {
		overflow: 'scroll !important',
		width: '100%',
		'& .MuiTabs-indicator': {
			display: 'flex',
			justifyContent: 'center',
			backgroundColor: 'transparent',
		},
		'& .MuiTabs-indicatorSpan': {
			display: 'none',
		},
	},
	tabPanel: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		'@media (max-width: 872px)': {
			'& svg': {
				width: '100%',
			},
			'& img': {
				width: '100%',
			},
		},
	},
}));

export const Portfolio = () => {
	const isMobile = useMediaQuery('(max-width:600px)');
	const { tab, tabs, tabPanel } = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<SectionLayout title='Portfolio'>
			<Box id="portfolio" sx={{ width: '100%' }}>
				<Box>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label='basic tabs example'
						centered
						className={tabs}
						{...isMobile && ({scrollButton: true, variant: 'scrollable'})}
					>
						<Tab className={tab} label='All' {...a11yProps(0)} />
						<Tab className={tab} label='Website' {...a11yProps(1)} />
						<Tab className={tab} label='MobileApp' {...a11yProps(2)} />
						<Tab className={tab} label='CSS' {...a11yProps(3)} />
						<Tab className={tab} label='GitHub' {...a11yProps(4)} />
					</Tabs>
				</Box>
				<TabPanel className={tabPanel} value={value} index={0}>
					<img alt="" src={imgSrc}/>
					<img alt="" src={imgSrc}/>
					<img alt="" src={imgSrc}/>
				</TabPanel>
				<TabPanel className={tabPanel} value={value} index={1}>
					<PortfolioImg />
					<PortfolioImg />
					<PortfolioImg />
				</TabPanel>
				<TabPanel className={tabPanel} value={value} index={2}>
					<PortfolioImg />
					<PortfolioImg />
					<PortfolioImg />
				</TabPanel>
				<TabPanel className={tabPanel} value={value} index={3}>
					<PortfolioImg />
					<PortfolioImg />
					<PortfolioImg />
				</TabPanel>
				<TabPanel className={tabPanel} value={value} index={4}>
					<PortfolioImg />
					<PortfolioImg />
					<PortfolioImg />
				</TabPanel>
			</Box>
		</SectionLayout>
	);
};
