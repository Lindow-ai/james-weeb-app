import React, { ReactNode } from "react";
import "./styles.css";

type ButtonType = {
    variant?: 'items';
    children?: ReactNode;
    style?: {}
};

const Button: React.FC<ButtonType> = ({ children, variant, style }) => {
  return <div style={style} className={ variant ?  `button-${variant}` : 'button-container'}>{children}</div>;
};

export default Button;