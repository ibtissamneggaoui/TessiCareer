import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Colors from "@/utils/styles/colors";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <Stack direction='row' sx={{position: 'fixed', bottom: 20, transform: 'translateX(-50%)', left:'50%' , bgcolor:Colors.third}}>
      <Typography variant="body2" color='#b4b5b7'>TessiCareer 1.0.0 © {date} 2T Services Maroc </Typography>
    </Stack>
  );
}

export default Footer;