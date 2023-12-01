import {Grid, IconButton, Typography} from '@mui/material'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import {IndexContext} from '../App'
import {useContext} from 'react'

function SlideNavigator({slideLength, setSlideDirection}) {
  const {index, setIndex} = useContext(IndexContext)

  const handleNext = () => {
    if (index < slideLength) {
      setIndex(index + 1)
      localStorage.setItem('slideIndex', index + 1)
      setSlideDirection('left')
    }
  }
  const handlePrev = event => {
    console.log(event)
    if (index > 1) {
      setIndex(index - 1)
      localStorage.setItem('slideIndex', index - 1)
      setSlideDirection('right')
    }
  }
  return (
    <Grid
      container
      item={true}
      alignItems={'center'}
      justifyContent={'space-between'}
      sx={{m: '0 auto', mb: '6rem', maxHeight: '4rem'}}
      xs={5}
    >
      <IconButton onKeyPress={handlePrev} onClick={handlePrev}>
        <ArrowBackIcon sx={{width: '40px', height: '40px', fill: 'white'}} />
      </IconButton>
      <Grid>
        <Typography variant="h5">
          {index} / {slideLength}
        </Typography>
      </Grid>
      <IconButton onClick={handleNext}>
        <ArrowForwardIcon sx={{width: '40px', height: '40px', fill: 'white'}} />
      </IconButton>
    </Grid>
  )
}

export default SlideNavigator
