import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#0067ff"
        }
    },
    background: {
        default: "#FFFFFF"
    },
    typography: {
        fontFamily: 'Ubuntu'
    }
})

export default theme;