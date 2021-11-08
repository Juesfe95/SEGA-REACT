import React from 'react'
import { useState } from "react";
import { css } from "@emotion/react";
import BarLoader from "react-spinners/BarLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #000000;
  height:100%;
  width:100%;
  position:fixed;
  z-index:999;
`;

function Spinner() {
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#efefef");

    return (
        <>
            <div >
                < BarLoader  color = { color }  loading = { loading }  css = { override }  size = { 400}  /> 
            </div>
        </>
        
    );
}


export default Spinner