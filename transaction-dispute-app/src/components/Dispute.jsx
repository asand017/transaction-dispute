import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Button, Divider, FormControl, Icon, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import './Dispute.css';
import { Header } from './Header';
import { disputeDescriptions } from './disputeDescriptions';

export const Dispute = (props) => {

    const handleChange = (event) => {
        props.changeDispute(event.target.value);
    }

    const handleCustomChange = (event) => {
        props.changeCustomDispute(event.target.value);
    }

    return(
        <>
            <Header title="Dispute Transaction" 
                left_icon={
                    <Icon onClick={() => props.dispatch({ type: 'details' })} 
                        sx={{ position: 'absolute', left: '10px' }}>
                        <ArrowBackIosIcon/>
                    </Icon>
                }
                right_icon={
                    <Icon onClick={props.onClose} sx={{ position: 'absolute', right: '10px'}}>
                        <CloseIcon/>
                    </Icon>
                }
            />
            <Divider/>
            <div className="dispute-form__container">
                <h1 style={{fontWeight: '100'}}>What doesn't look right about this transaction?</h1>
                <Box sx={{ minWidth: 120, marginTop: '2rem' }}>
                    <FormControl fullWidth>
                        <InputLabel id="dispute-reason-select-label">Pick Reason of Dispute</InputLabel>
                        <Select
                            labelId="dispute-reason-select-label"
                            id="dispute-reason-select"
                            value={props.dispute}
                            label="Dispute"
                            onChange={handleChange}
                            variant='standard'
                        >
                            <MenuItem value={''}>Select</MenuItem>
                            <MenuItem value="fraudulent_charge">{disputeDescriptions["fraudulent_charge"]}</MenuItem>
                            <MenuItem value="persistent_subscription">{disputeDescriptions["persistent_subscription"]}</MenuItem>
                            <MenuItem value="erroneous_charge">{disputeDescriptions["erroneous_charge"]}</MenuItem>
                            <MenuItem value="other">{disputeDescriptions["other"]}</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                    {props.dispute === 'other' && 
                        <TextField 
                            id="custom-dispute"
                            label="Describe your dispute"
                            multiline
                            rows={4}
                            value={props.customDispute}
                            onChange={handleCustomChange}
                            sx={{ marginTop: '2rem', width: '100%'}}
                        />
                    }
                    {props.dispute && 
                        <div className='flex-center' style={{ marginTop: '2rem', gap: '20px'}}>
                            <Button variant="contained" fullWidth className="dispute-cancel_button" onClick={props.onClose}>Cancel</Button>
                            <Button variant="contained" fullWidth className="dispute-next_button" onClick={() => props.dispatch({ type: 'review' })}>Next</Button>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}