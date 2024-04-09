
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Footer from './Footer'
import { ReactNode } from 'react'
import SideBar from './SideBar'
import Colors from "../../utils/styles/colors";


const containerStyle = {
  flexGrow: 1,
  p: 8,
  pb:5,
  position: 'relative',
  minHeight:'100vh',
  backgroundColor: Colors.third
}

interface ContainerProps {
    children: ReactNode;
  }
  
export default function Container({ children }: ContainerProps) {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SideBar />
      <Box component="main" sx={containerStyle}>
        <Box sx={{height:100}}></Box>
        {children}
        <Footer />
      </Box>
    </Box>
  )
}