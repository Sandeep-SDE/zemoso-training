 import { createTheme } from '@mui/material/styles';
 import { colors } from '@mui/material';


 declare module '@mui/material/styles/createPalette' {

    interface Palette{
        primary400:{
            main: string;
        };
        primary500:{
            main: string;
        }
        acentgreen:{
            main: string;
            light: string;
        }
        acentyellow:{
            main:string;
            light: string;
        }
    }
    interface PaletteOptions{
        primary400?: PaletteColorOptions;
        primary500?: PaletteColorOptions;
        acentgreen?: PaletteColorOptions;
        acentyellow?:PaletteColorOptions;
    }
  }

// export const darkTheme = createTheme({
//     palette:{
//         mode: "dark"
//     }
// });


export const myTheme = createTheme({
    palette:{
        primary400:{
            main: '#224DFF',
        },
        primary500:{
            main: "#95AAFF",
        },
        acentgreen:{
            main: "#17A076",
            light: "#F2FCFB"
        },
        acentyellow:{
            main: '#A08817',
            light: '#FAF8EB'
        }
    }
});

// export const checkTheme = createTheme({
//     palette:{
//         success:{
//             main: colors.green["900"],
//             dark: colors.red["900"]
//         },
//         error:{
//             main: colors.red["A700"]
//         },
//         warning:{
//             main: colors.amber["900"]
//         }
//     }
// });

// export const TextFieldTheme = createTheme({
//     palette: {
//         primary:{
//             main: colors.green["800"],
//         },
//         secondary:{
//             main: colors.purple["900"]
//         },
//         success:{
//             main: colors.green["900"],
//             dark: colors.red["900"]
//         },
//         error:{
//             main: colors.red["A700"]
//         },
//         warning:{
//             main: colors.amber["900"]
//         },

//         info: {
//             main: colors.red["900"]
//         }
//     }
// });

export const CustTypoTheme = createTheme({
    palette: {
        primary:{
            main: colors.red["800"],
        },
        secondary:{
            main: colors.blue["800"]
        }
    },
    typography:{
        h1: {
            fontFamily: "inter",
            fontWeight: 500,
            fontSize: "20px",
            letterSpacing: "-0.00521em"
        },
        h2: {
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: "20px",
            letterSpacing: "-0.00521em"
        },
        h3: {
            fontFamily: "sarif",
            fontWeight: 500,
            fontSize: "8rem",
            letterSpacing: "-0.00521em"
        },
        h4: {
            fontFamily: "cursive",
            fontWeight: 500,
            fontSize: "7rem",
            letterSpacing: "-0.00521em"
        },
        h5: {
            fontFamily: "Gill Sans",
            fontWeight: 500,
            fontSize: "6rem",
            letterSpacing: "-0.00521em"
        },
        h6: {
            fontFamily: "Georgia",
            fontWeight: 500,
            fontSize: "4rem",
            letterSpacing: "-0.00521em"
        },
    }
    
});