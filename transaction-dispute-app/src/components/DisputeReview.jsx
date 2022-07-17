import { Header } from "./Header";
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button, Icon, Divider } from "@mui/material";
import './DisputeReview.css';

export const DisputeReview = (props) => {
    return (
        <>
            <Header title="Dispute Transaction" 
                left_icon={
                    <Icon onClick={() => props.dispatch({ type: 'dispute' })} 
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
            <div style={{padding: '1em'}}>
                <h1 style={{fontWeight: '100'}}>Does everything look OK?</h1>
                <p>You can still make changes on the previous page</p>
            </div>
            <Divider/>
            <div className="dispute_summary-container">
                <div className="summary-item"> 
                    <div className="left-col">Description</div>
                    <div className="right-col">{props.details.description}</div>
                </div>
                <div className="summary-item">
                    <div className="left-col">Amount</div>
                    <div className="right-col">{props.details.charge}</div>
                </div>
                <div className="summary-item">
                    <div className="left-col">Transaction date</div>
                    <div className="right-col">{(new Date(props.details.posted_date)).toDateString()}</div>
                </div>
                <div className="summary-item">
                    <div className="left-col">What doesn't look right about this transaction?</div>
                    <div className="right-col">{props.dispute}</div>
                </div>
                <div className='flex-center' style={{ marginTop: '2rem', gap: '20px'}}>
                    <Button variant="contained" fullWidth 
                        className="dispute-cancel_button" 
                        onClick={props.onClose}>
                        Cancel
                    </Button>
                    <Button variant="contained" fullWidth 
                        className="dispute-next_button" 
                        onClick={() => props.dispatch({ type: 'submit' })}>
                        Submit
                    </Button>
                </div>
            </div>
        </>
    )
}