import { HashRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import { Router } from "./routers";

export const App = () => (
  <CssBaseline>
    <HashRouter>
      <Router />
    </HashRouter>
  </CssBaseline>
);
