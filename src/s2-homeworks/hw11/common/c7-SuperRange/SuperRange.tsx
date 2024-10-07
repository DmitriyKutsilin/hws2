import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: "148px",
                zIndex: '2',
                '& .MuiSlider-rail': {
                    color: '#8B8B8B'
                },
                '& .MuiSlider-track': {
                    color: '#00CC22'
                },
                '& .MuiSlider-thumb': {
                    padding: '9px',
                    backgroundColor: 'white',
                    border: '1px solid #01CB22',
                    // zIndex: '20'
                },
                '& .MuiSlider-thumb::after': {
                    content: '""',
                    width: '0px',
                    height: '0px',
                    padding: '3px',
                    backgroundColor: '#01CB22',
                    border: '1px solid #01CB22',
                }

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
