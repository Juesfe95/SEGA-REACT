import React,{useEffect} from 'react';
import {HOME} from '../Constant';
import { withRouter } from "react-router-dom";

function AutomaticLogOut(props){

    let warningTimeout = sessionStorage.getItem('EXPIRED_TOKEN')*100;
    let timoutNow = 180000;
    let warningTimerID,timeoutTimerID;

    function startTimer() {
        // window.setTimeout returns an Id that can be used to start and stop a timer
        warningTimerID = window.setTimeout(warningInactive, warningTimeout);
    }

    function warningInactive() {
        window.clearTimeout(warningTimerID);
        timeoutTimerID = window.setTimeout(IdleTimeout, timoutNow);
    }

    function resetTimer() {
        window.clearTimeout(timeoutTimerID);
        window.clearTimeout(warningTimerID);
        startTimer();
    }

    // Logout the user.
    function IdleTimeout() {
        props.history.push(HOME);
        sessionStorage.clear();
        window.location.reload();
    }

    function setupTimers () {
        document.addEventListener("mousemove", resetTimer, false);
        document.addEventListener("mousedown", resetTimer, false);
        document.addEventListener("keypress", resetTimer, false);
        document.addEventListener("touchmove", resetTimer, false);
        document.addEventListener("onscroll", resetTimer, false);
        startTimer();
    }

    useEffect(() => {
        setupTimers ()
      },[]);


    return(
        <div>
        </div>
    );

}

export default withRouter(AutomaticLogOut);