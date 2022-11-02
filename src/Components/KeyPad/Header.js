import React, { useEffect, useRef } from "react";
// import { Button } from "@mui/material";

import "./Header.css";

function Header(props) {
  const resultRef = useRef();
  const expressionRef = useRef();

 
  useEffect(() => {
    expressionRef.current.scrollLeft = expressionRef.current.scrollWidth;
  }, [props.expression]);

  return (
    <div className="header custom-scroll">
      
      <br />
      <div ref={expressionRef} className="header_expression custom-scroll">
        <p>{props.expression}</p>
      </div>
      <p ref={resultRef} className="header_result">
        {props.result}
        
      </p>
     
    </div>
  );
}

export default Header;
