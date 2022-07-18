import { useEffect, useState } from "react";
import { Header } from "./Header";
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button, Icon, Divider } from "@mui/material";

export const Submission = (props) => {
    const [result, setResult] = useState(null);
    const [err, setErr] = useState(null);

    useEffect(() => {
        let s = 0;
        fetch('http://localhost:8080/disputes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(props.details)
        })
        .then(response => {
            s = response.status;
            return response.json();
        })
        .then(data => {
            if (s === 400){
                setErr("Error: " + data.message);
            }else{
                console.log(data);
                setResult(data);
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            setErr(error);
        })
    }, []);

    return (
        <>
            <Header title="Dispute Transaction"
                left_icon={
                    <Icon onClick={() => props.dispatch({ type: 'review' })} 
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
            <div className="flex-center column" style={{ padding: '1em' }}>
                <div style={{width: '100%'}}>
                    {result && <h1 style={{ fontWeight: '150', color: 'green'}}>Dispute successfully submitted</h1>}
                    {err && 
                        <>
                            <h1 style={{ fontWeight: '150', color: 'red'}}>Something went wrong...</h1>
                            <h4>Unable to submit dispute at this time. Please try again later</h4>
                            <h4>{err}</h4>
                        </>
                    }
                </div>
                <div style={{ width: '35vw' }}>
                    <Button fullWidth variant="contained" style={{ backgroundColor: 'var(--main-color)'}} onClick={props.onClose}>Done</Button>
                </div>
            </div>
        </>
    )
}