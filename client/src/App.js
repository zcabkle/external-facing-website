import { ThemeProvider } from '@mui/material/styles';
import React from "react"
import AppBar from "./components/AppBar";
import ApplicationRouter from "./components/ApplicationRouter";
import createTheme from "./theme/index.js";
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';

export default function App() {

  return (
   //<div><ThemeProvider theme={createTheme()}> <CssBaseline /><ApplicationRouter /><AppBar/></ThemeProvider></div>
    <div><ThemeProvider theme={createTheme()}> <CssBaseline /><ApplicationRouter /></ThemeProvider></div>

  );
} 