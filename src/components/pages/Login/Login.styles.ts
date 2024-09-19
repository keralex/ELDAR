import { SxProps, Theme } from "@mui/material";
import backgroundImage from '../../../assets/background-blue.png';

export const getContainerStyles = (): SxProps<Theme> => ({
    backgroundColor: 'primary.main',
    width: '100%',
    height: '100%',
    padding: '2rem 8rem',
    boxSizing: 'border-box',
})

export const getBoxStyles = ():SxProps<Theme> => ({
    backgroundColor: '#ffffff',
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    borderRadius: '15px',
    padding: '2rem',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
    
})

export const getLoginStyles = ():SxProps<Theme> => ({
    width: '40%', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100%'
})

export const getImageStyles = ():SxProps<Theme> => ({
    width: '50%', 
    height: '100%',
    borderRadius: '15px',
    backgroundImage: `url(${backgroundImage})`
})