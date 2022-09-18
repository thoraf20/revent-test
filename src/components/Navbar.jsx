import React from 'react';
import { AppBar, Toolbar, Box, Link } from '@mui/material';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Logo, Petal } from '../assets/svg';

const appbar = {
	background: '#000000',
	marginBottom: '70px',
};

const button = {
	color: '#fff',
	margin: '0 15px',
	textDecoration: 'none',
	cursor: 'pointer',
	fontWeight: '600 !important',
};

const useStyles = makeStyles((theme) => ({
	links: {
		'@media (max-width: 836px)': {
			display: 'none',
		},
	},
	appbarWrapper: {
		// '@media (max-width: 836px)': {
		// 	display: 'none',
		// },
		display: 'flex',
		justifyContent: 'space-between',
		padding: `0 ${theme.spacing(18)} !important`,
		'@media (max-width: 1224px)': {
			padding: `0 ${theme.spacing(5)} !important`,
		},
	},
	menu: {
		'@media (min-width: 836px)': {
			display: 'none !important',
		},
	},
	logo: {
		marginTop: '20px',
		'@media (max-width: 836px)': {
			'& svg': {
				height: '50px ',
				width: '100px',
			},
		},
	},
}));
const navItems = [
	{ label: 'About Us', link: '/#about' },
	{ label: 'Portfolio', link: '/#portfolio' },
	{ label: 'Experience', link: '/#experience' },
	{ label: 'Contact', link: '/#contact' },
];
const drawerWidth = 240;

export const Navbar = () => {
	const { container, links, menu, logo, appbarWrapper } = useStyles();
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [activeLink, setActiveLink] = React.useState('');
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const handleClickLink = (link) => {
		setActiveLink(link);
		window.location.replace(link)
	}

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography variant='h6' sx={{ my: 2 }}>
				<Petal />
			</Typography>
			<Divider />
			<List>
				{navItems.map(({label, link}) => (
					<ListItem
						onClick={() => window.location.replace(link)}
						key={link}
						disablePadding
					>
						<ListItemButton sx={{ textAlign: 'center' }}>
							<ListItemText primary={label} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<div>
			<Box sx={{ display: 'flex' }}>
				<AppBar component='nav' sx={appbar}>
					<Toolbar className={appbarWrapper}>
						<Box className={logo}>
							<Logo />
						</Box>

						<Box className={links}>
							{navItems.map(({label, link}) => (
								<Link onClick={() => handleClickLink(link)} key={link} sx={{...button,
								color: activeLink === link ? '#FCE82F' : 'white'}}>
									{label}
								</Link>
							))}
						</Box>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							edge='start'
							onClick={handleDrawerToggle}
							className={menu}
						>
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
				<Box component='nav'>
					<Drawer
						container={container}
						variant='temporary'
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
						sx={{
							'& .MuiDrawer-paper': {
								boxSizing: 'border-box',
								width: drawerWidth,
							},
						}}
					>
						{drawer}
					</Drawer>
				</Box>
			</Box>
		</div>
	);
};
