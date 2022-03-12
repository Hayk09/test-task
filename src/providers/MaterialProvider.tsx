import { ThemeProvider as Material } from "@mui/material";

import theme from "../theme";

const MaterialProvider = ({ children }: any) => (
  <Material
    theme={theme}>
    {children}
  </Material>
)


export default MaterialProvider