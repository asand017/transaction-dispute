import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Button, Divider, FormControl, Icon, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import './Dispute.css';

const disputeDescriptions = {
    "fraudulent_charge": "I did not make this purchase.",
    "persistent_subscription": "I'm still being charged for a product or service.",
    "erroneous_charge": "I was incorrectly charged for a purchase I made.",
    "other": "Something else...",
}

export const Dispute = (props) => {
    const [dispute, setDispute] = useState(null);
    const [customDispute, setCustomDispute] = useState(null);

    const handleChange = (event) => {
        setDispute(event.target.value);
    }

    const handleCustomChange = (event) => {
        setCustomDispute(event.target.value);
    }

    return(
        <>
            <div className="header">
                <div className="banner"></div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Icon onClick={() => props.dispatch({ type: 'details' })} sx={{ position: 'absolute', left: '10px' }}>
                        <ArrowBackIosIcon/>
                    </Icon>
                    <p>Dispute Transaction</p>
                    <Icon onClick={props.onClose} sx={{ position: 'absolute', right: '10px'}}>
                        <CloseIcon/>
                    </Icon>
                </div>
            </div>
            <Divider/>
            <div className="dispute-form__container">
                <h3>What doesn't look right about this transaction?</h3>
                <Box sx={{ minWidth: 120, marginTop: '2rem' }}>
                    <FormControl fullWidth>
                        <InputLabel id="dispute-reason-select-label">Pick Reason of Dispute</InputLabel>
                        <Select
                            labelId="dispute-reason-select-label"
                            id="dispute-reason-select"
                            value={dispute}
                            label="Dispute"
                            onChange={handleChange}
                            variant='filled'
                        >
                            <MenuItem value={null}>Select</MenuItem>
                            <MenuItem value="fraudulent_charge">{disputeDescriptions["fraudulent_charge"]}</MenuItem>
                            <MenuItem value="persistent_subscription">{disputeDescriptions["persistent_subscription"]}</MenuItem>
                            <MenuItem value="erroneous_charge">{disputeDescriptions["erroneous_charge"]}</MenuItem>
                            <MenuItem value="other">{disputeDescriptions["other"]}</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                    {dispute === 'other' && 
                        <TextField 
                            id="custom-dispute"
                            label="Describe your dispute"
                            multiline
                            rows={4}
                            value={customDispute}
                            onChange={handleCustomChange}
                            sx={{ marginTop: '2rem', width: '100%'}}
                        />
                    }
                    {dispute && 
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