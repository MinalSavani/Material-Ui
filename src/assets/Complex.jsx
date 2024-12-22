import * as React from 'react';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const images = [
  {
    url: 'src/assets/break.jpg',
    title: 'Breakfast',
    width: '40%',
  },
  {
    url: 'src/assets/bur.jpg',
    title: 'Burgers',
    width: '40%',
  },
  {
    url: 'src/assets/camera.jpg',
    title: 'Camera',
    width: '30%',
  },
];

export default function ButtonBaseDemo() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 500, width: '100%' }}>
      {images.map((image) => (
        <ButtonBase
          key={image.title}
          focusRipple
          sx={{
            width: image.width,
            position: 'relative',
            height: 300,
            '&:hover, &.Mui-focusVisible': {
              zIndex: 1,
              '& .MuiImageBackdrop-root': {
                opacity: 0.15,
              },
              '& .MuiImageMarked-root': {
                opacity: 0,
              },
              '& .MuiTypography-root': {
                border: '4px solid currentColor',
              },
            },
            '@media (max-width:600px)': {
              width: '100% !important', // Overrides inline-style
              height: 100,
            },
          }}
        >
          <span
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              backgroundSize: 'cover',
              backgroundPosition: 'center 40%',
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span
            className="MuiImageBackdrop-root"
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              backgroundColor: 'black',
              opacity: 0.4,
              transition: 'opacity 0.3s',
            }}
          />
          <span
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={(theme) => ({
                position: 'relative',
                p: 4,
                pt: 2,
                pb: `calc(${theme.spacing(1)} + 6px)`,
              })}
            >
              {image.title}
              <span
                className="MuiImageMarked-root"
                style={{
                  height: 3,
                  width: 18,
                  backgroundColor: 'white',
                  position: 'absolute',
                  bottom: -2,
                  left: 'calc(50% - 9px)',
                  transition: 'opacity 0.3s',
                }}
              />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </Box>
  );
}
