import { useState } from "react";
import Switch from "@mui/material/Switch";
import StarIcon from '@mui/icons-material/Star';

const PageA = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h3>Custom Switch with Checked Icon</h3>
        <Switch
          checked={checked}
          onChange={handleChange}
          color="primary"
          checkedIcon={<StarIcon style={{ fill: "gold", width: 24, height: 24 }} />}
          icon={<StarIcon style={{ fill: "gray", width: 24, height: 24 }} />}
        />
        <p>{checked ? "Switch is ON" : "Switch is OFF"}</p>
        <hr />
      </div>
    </>
  )
}

export default PageA;