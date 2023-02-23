import "./App.css";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./components/appbar";
import Box from "@mui/material/Box";

export default function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Box width="100%" height="100%" padding={2}>
        <Outlet />
      </Box>
    </div>
  );
}


