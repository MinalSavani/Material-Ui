import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FavoriteBorder } from '@mui/icons-material';
import Favorite from '@mui/icons-material/Favorite';
const PageE = () => {
  return (
    <div>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        <FormControlLabel required control={<Checkbox />} label="Required" />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked size="small" />}
          label="Small Checkbox"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Default Checkbox"
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
            />
          }
          label="Large Checkbox"
        />
        <FormControlLabel
  control={<Checkbox defaultChecked color="success" />}
  label="Success Checkbox"
/>

<FormControlLabel
  control={<Checkbox defaultChecked color="error" />}
  label="Primary Checkbox"
/>
<FormControlLabel
  control={<Checkbox defaultChecked color="success" />}
  label="Success Checkbox"
/>
<FormControlLabel
  control={<Checkbox defaultChecked color="primary" />}
  label="Primary Checkbox"
/>

<FormControlLabel
  control={<Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite/>}  />}
  
/>
<FormControlLabel
  control={<Checkbox defaultChecked color="primary" />}

/>


      </FormGroup>
    </div>
  );
};

export default PageE;
