import { useEffect } from "react";
import { Header } from "./Header";
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button, Icon, Divider } from "@mui/material";

export const Submission = (props) => {

    useEffect(() => {

    }, []);

    return (
        <>
            <Header title="Dispute Transaction"
                left_icon={
                    <Icon onClick={props.onClose} 
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
        </>
    )
}