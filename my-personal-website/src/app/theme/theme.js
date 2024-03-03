'use client';
import { createTheme } from "@mui/material";

const themeSetup = {
    palette: {
        background: {
            default: '#8E7AB5',
            paper: '#8E7AB5'
        },
        primary: {
            main: '#8E7AB5',
            violet: '#81689D'

        },
        secondary: {
            main: '#8E7AB5',
            soft_pink: '#FFD0EC'
        }
    },
    components:{
        MuiCssBaseline: {
            styleOverrides: (themeParam) => `
            main {
                background-color: ${themeParam.palette.background.default};
            }
            `,
        }
    }

};

const theme = createTheme(themeSetup);

export { theme }