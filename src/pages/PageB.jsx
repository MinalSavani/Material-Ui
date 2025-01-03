import Switch from "@mui/material/Switch";
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

const PinkSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[600],
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600],
  },
}));

const label = { inputProps: { 'aria-label': 'Color switch demo' } };


const PageB = () => {
  return (
    <>
      <div>
        <Switch {...label} defaultChecked />
        <Switch {...label} defaultChecked color="secondary" />
        <Switch {...label} defaultChecked color="warning" />
        <Switch {...label} defaultChecked color="default" />
        <PinkSwitch {...label} defaultChecked />
      </div>
    </>
  )
}

export default PageB