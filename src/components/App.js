
// * import tools
import React from "react";
import { ToastContainer } from 'react-toastify';
import TextField from '@mui/material/TextField';

// * import components
//import AppRouter from "@components/config/app-configurations/routers/router";
import { AppConfigurations } from "./config/app-configurations/app.configurations";



const App = () => {
  return (
    <AppConfigurations>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />

      {/* <AppRouter /> */}
      <ToastContainer />
    </AppConfigurations>
  );
};

export default App;
