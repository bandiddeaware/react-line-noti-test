import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import fontFamily from './Fonts'

const NormalText = styled(Typography)(({ theme }) => ({
    color: 'black',
    fontSize: '120%',
    paddingBottom: theme.spacing(0.5),
  }));

export default  NormalText ;