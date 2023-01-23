import { createTheme } from "@mui/material/styles";
import { primary_color, secondary_color } from './colors';

export const generateTheme = () =>
    createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: primary_color,
            },
            secondary: {
                main: secondary_color,
            },
            contrastThreshold: 3,
            tonalOffset: 0.2,
        },
        typography: {
            button: {
                fontSize: "1rem",
                disableRipple: false,
                background: `linear-gradient(to right,${secondary_color} 0%,$sand 50%,${primary_color} 100%)`,
                backgroundSize: "500%"
            },
        },
    });


export const appendCSSSupport = () => {
    const svgStyle = `
        svg.primary { fill: ${primary_color}}
        svg.secondary { fill: ${secondary_color}}
      `;
    const head = document.head;
    const link = document.createElement("style");
    link.textContent = svgStyle;
    link.type = "text/css";
    head.appendChild(link);
};