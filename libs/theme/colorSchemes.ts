export interface IPrimary {
  main?: string;
  light?: string;
  dark?: string;
  contrastText?: string;
}
const colorSchemes = (primary: IPrimary) => {
  return {
    primary: {
      main: primary?.main || "#05A0C0",
      light: primary?.light || "#22AECA",
      dark: primary?.dark || "#047085",
      contrastText: primary?.contrastText || "#FFF",
    },
    secondary: {
      main: "#55575D",
      light: "#888B93",
      dark: "#44464A",
      contrastText: "#FFF",
    },
    error: {
      main: "#EE3135",
      light: "#E8696B",
      dark: "#BC2528",
      contrastText: "#FFF",
    },
    warning: {
      main: "#FF9F43",
      light: "#FFB269",
      dark: "#E68F3C",
      contrastText: "#FFF",
    },
    info: {
      main: "#00BAD1",
      light: "#33C8DA",
      dark: "#00A7BC",
      contrastText: "#FFF",
    },
    success: {
      main: "#007A33",
      light: "#007A33",
      dark: "#007A33",
      contrastText: "#FFF",
    },
    background: {
      default: "#F8F7FA",
      paper: "#FFFFFF",
    },
    action: {
      active: `rgb(var(--mui-mainColorChannels-light) / 0.6)`,
      hover: `rgb(var(--mui-mainColorChannels-light) / 0.06)`,
      selected: `rgb(var(--mui-mainColorChannels-light) / 0.08)`,
      disabled: `rgb(var(--mui-mainColorChannels-light) / 0.3)`,
      disabledBackground: `rgb(var(--mui-mainColorChannels-light) / 0.16)`,
      focus: `rgb(var(--mui-mainColorChannels-light) / 0.1)`,
      focusOpacity: 0.1,
    },
  };
};

export default colorSchemes;
