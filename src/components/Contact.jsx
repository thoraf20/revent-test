import { Box, Stack, Typography, TextField, Button } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import React from 'react';
import { SectionLayout } from './SectionLayout';
import { makeStyles } from '@mui/styles';
import { CallIcon, SendIcon } from '../assets/svg';

const useStyles = makeStyles((theme) => ({
	callAndEmailCls: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '100%',
		gap: theme.spacing(4),
		'@media (max-width: 438px)': {
			flexDirection: 'column',
		},
	},
	call: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		'& svg': {
			height: '40px',
		},
	},
	callTitle: {
		fontWeight: '700 !important',
	},
	container: {
		width: '100%',
	},
	input: {
		background: '#fff',
		borderRadius: '10px !important',
		height: theme.spacing(5.25),
	},
	btn: {
		color: '#000000 !important',
		fontWeight: '700 !important',
		fontSize: `${theme.spacing(2.5)} !important`,
		width: 'max-content !important',
		borderRadius: '10px !important',
		background: '#FCE82F !important',
		padding: `${theme.spacing(2)} ${theme.spacing(3)} !important`,
		textTransform: 'none !important',
	},
}));
// 438
export const Contact = () => {
	const classes = useStyles();
	return (
		<SectionLayout title='Get in Touch'>
			<Stack spacing={4} className={classes.container}>
				<Box className={classes.callAndEmailCls}>
					<Stack spacing={1} className={classes.call}>
						<CallIcon />
						<Typography className={classes.callTitle}>Call Us</Typography>
						<Typography>+234-806 749-700</Typography>
						<TextField
							fullWidth
							InputProps={{
								className: classes.input,
							}}
						/>
					</Stack>
					<Stack spacing={1} className={classes.call}>
						<SendIcon />
						<Typography className={classes.callTitle}>Send Email</Typography>
						<Typography>revent@digital.com</Typography>
						<TextField
							fullWidth
							InputProps={{
								className: classes.input,
							}}
						/>
					</Stack>
				</Box>
				<TextField
					fullWidth
					InputProps={{
						className: classes.input,
					}}
				/>
				<TextareaAutosize
					style={{ height: '220px' }}
					className={classes.input}
				/>
				<Button className={classes.btn} variant='contained'>
					Send message
				</Button>
			</Stack>
		</SectionLayout>
	);
};
