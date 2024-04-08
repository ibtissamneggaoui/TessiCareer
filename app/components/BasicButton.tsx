'use client'


import React, { ReactNode} from "react";
import Button from "@mui/material/Button";
import Colors from "@/utils/styles/colors";

interface BasicButtonProps{
  onClick?: () => void;
  children: ReactNode;
}

// review props
function BasicButton({ onClick, children, bgcolor ,...rest}: BasicButtonProps & { [key: string]: any }) {
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: bgcolor,
        borderRadius: 2,
        p: 1.1,
        minWidth: 200,
        fontSize: '1rem',
        fontWeight: 'bold',
        letterSpacing: 1,
        '&:hover': {
            bgcolor: Colors.third,
            color: bgcolor, 
          },
      }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default BasicButton;
