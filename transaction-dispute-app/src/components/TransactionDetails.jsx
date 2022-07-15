import { useEffect } from "react";
import { Divider, Icon } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './TransactionDetails.css';

export const TransactionDetails = (props) => {

    useEffect(() => {
        console.log(props);
    })

    return (
        <div className="container">
            <div className="header">
                <div className="banner"></div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <p>Transaction Details</p>
                    <Icon onClick={props.onClose} sx={{ position: 'absolute', right: '10px'}}>
                        <CloseIcon/>
                    </Icon>
                </div>
            </div>
            <Divider/>
            <div className="content">
                <div className="flex-center column price">
                    <p className="charge">${props.details.charge}</p>
                    <p className="small-font">Sale</p>    
                </div>
                <div className="flex-center column date">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Icon>
                            <CalendarMonthIcon/>
                        </Icon>
                        <p>{(new Date(props.details.posted_date)).toDateString()}</p>
                    </div>
                    <p className="small-font" style={{ margin: '0' }}>Transaction Date</p>
                </div>
                <div className="flex-center info">
                    <Icon>
                        <StorefrontIcon/>
                    </Icon>
                    {props.details.description}
                </div>
            </div>
        </div>
    )
}