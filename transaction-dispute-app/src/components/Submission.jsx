import { useEffect } from "react";
import { Header } from "./Header";
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button, Icon, Divider } from "@mui/material";

export const Submission = (props) => {

    useEffect(() => {
        fetch('http://localhost:8080/disputes', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(response => response)
        .then(data => console.log(data))
    }, []);

    return (
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
            <div className="flex-center">
                <div style={{ width: '35vw' }}>
                    <Button fullWidth variant="contained">Done</Button>
                </div>
            </div>
        </>
    )
}