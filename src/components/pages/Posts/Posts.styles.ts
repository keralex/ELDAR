import { SxProps, Theme } from "@mui/material"

export const getContainerStyles = (): SxProps<Theme> => ({
    backgroundColor: 'primary.main',
    width: '100%',
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
    flexDirection: 'column',
})