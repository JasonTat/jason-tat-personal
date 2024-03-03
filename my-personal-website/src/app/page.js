'use client';
import Image from "next/image";
import styles from "./page.module.css";

//mui
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, Typography } from "@mui/material";
import Container from '@mui/material/Container';

//theme
import { theme } from "./theme/theme";

//components
import GridContent from "./components/GridContent";



export default function Home() {
  return (

    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme/>
      <main className={styles.main}>

        <Container alignItems={"center"} justifyContent={"center"} sx={{minHeight: '100%'}}>
          
          <Typography variant="h3" align="center" mb={4}>
            Welcome to my website!
          </Typography>


          <GridContent>

          </GridContent>


        </Container>




      </main>
    </ThemeProvider>





  );
}
