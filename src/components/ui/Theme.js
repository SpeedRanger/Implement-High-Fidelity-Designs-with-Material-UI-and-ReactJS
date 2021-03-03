import { createMuiTheme } from '@material-ui/core/styles';
const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';
export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      arcOrange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    h3: {
      fontWeight: 300,
    },
  },
});