import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#639EC2',
            600: '#201E1E',
            900: '#181717',
        },
        secondary: {
            main: '#858585',
        }
    }
});

export default theme
