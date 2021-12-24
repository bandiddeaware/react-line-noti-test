import { createTheme } from '@mui/material';
import color from '../constants/Colors';
import fontFamily from '../constants/Fonts';


type CustomTheme = {
    color: {
        mainText: string,
        sidebarText: string,
        sidebarTextActive: string,
        sidebarBackgroundActive: string,
        loginButton: string,
    },
    fontFamily: string,
    sidebarWidth: number,
}


declare module '@mui/material/styles' {
    interface Theme extends CustomTheme { }
    interface ThemeOptions extends CustomTheme { }
}

const GlobalMUITheme = createTheme({
    typography: {
        fontFamily: fontFamily,
        body1: {
            color: color.mainText,
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontFamily: fontFamily
        }
    },
    palette: {
        text: {
            primary: color.mainText
        },
        background: {
            default: color.background
        },
    },
    color: {
        mainText: color.mainText,
        sidebarText: color.darkGray,
        sidebarTextActive: color.white,
        sidebarBackgroundActive : color.sidebarActive,
        loginButton: color.darkBlue,
    },
    fontFamily: fontFamily,
    sidebarWidth: 256
});

type ThemeType = typeof GlobalMUITheme;


export default GlobalMUITheme;

export type { ThemeType };