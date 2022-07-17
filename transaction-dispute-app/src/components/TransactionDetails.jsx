import { useEffect, useReducer, useState  } from "react";
import { Avatar, Divider, Icon } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './TransactionDetails.css';
import { grey } from "@mui/material/colors";
import { Dispute } from "./Dispute";
import { DisputeReview } from "./DisputeReview";
import { Submission } from "./Submission";
import { Header } from './Header';
import { disputeDescriptions } from "./disputeDescriptions";

const initialState = { option: 'details' };

function reducer(state, action) {
    // would add additional transaction actions here
    switch (action.type) {
        case 'details':
            return { option: 'details'};
        case 'dispute':
            return { option: 'dispute'};
        case 'review':
            return { option: 'review'};
        case 'submit':
            return { option: 'submit'};
        default:
            throw new Error();
    }
}

export const TransactionDetails = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [dispute, setDispute] = useState('');
    const [customDispute, setCustomDispute] = useState(null);

    useEffect(() => {
        console.log(props);
    })

    useEffect(() => {
        console.log(state.option);
    }, [state.option])

    return (
        <>
            <div className="container"> 
                {(state.option === 'details') && 
                    <>
                        <Header title="Transaction Details" 
                            right_icon={
                                <Icon onClick={props.onClose} sx={{ position: 'absolute', right: '10px'}}>
                                    <CloseIcon/>
                                </Icon>
                            }
                        />
                        <Divider/>
                        <div className="transactions__content">
                            <div className="flex-center column price">
                                <p className="charge">${props.details.charge}</p>
                                <p className="small-font">Sale</p>    
                            </div>
                            <div className="flex-center column date">
                                <div className="date__row-1">
                                    <Avatar className="calendar_icon" sx={{ bgcolor: grey[100]}}>
                                        <CalendarMonthIcon/>
                                    </Avatar>
                                    <p>{(new Date(props.details.posted_date)).toDateString()}</p>
                                </div>
                                <p className="date__row-2 small-font">Transaction Date</p>
                            </div>
                            <div className="flex-center info">
                                <Avatar className="storefront_icon" sx={{ bgcolor: grey[100]}}>
                                    <StorefrontIcon/>
                                </Avatar>
                                <p>{props.details.description}</p>
                            </div>
                        </div>
                        <Divider/>
                        <div className="actions__container flex-center">
                            <div className="dispute flex-center" onClick={() => dispatch({type: 'dispute'})}>
                                <h4>Dispute Transaction</h4>
                                <Icon className="dispute_button"><ArrowForwardIosIcon/></Icon>
                            </div>
                        </div>
                    </>
                } 
                {(state.option === 'dispute') && 
                    <Dispute 
                        dispatch={dispatch} 
                        onClose={props.onClose} 
                        dispute={dispute}
                        changeDispute={setDispute} 
                        customDispute={customDispute}
                        changeCustomDispute={setCustomDispute}
                    />
                }
                {(state.option === 'review') && 
                    <DisputeReview 
                        dispatch={dispatch} 
                        onClose={props.onClose}
                        details={props.details}
                        dispute={dispute ? disputeDescriptions[dispute] : customDispute}
                    />
                }
                {(state.option === 'submit') &&
                    <Submission
                        dispatch={dispatch}
                        onClose={props.onClose}
                        details={props.details}
                    />
                }
            </div>  
        </>
    )
}