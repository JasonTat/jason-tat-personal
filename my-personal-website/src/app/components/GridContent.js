import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

import BoxComponent from './BoxComponent';
import { theme } from '../theme/theme';

export default function GridContent() {

    return (
        <Container>
            <Grid container spacing={2}>

                {/* academics and skills */}
                <Grid item xs={4}>
                    <Box component="div"
                        sx={{
                            p: 2,
                            border: '1px solid grey',
                            borderRadius: 3,
                            borderColor: 'primary.main',
                            backgroundColor: 'primary.main',
                            boxShadow: 4
                            }}>
                        <Typography variant='h5' align="center">
                            Academics + Skills
                        </Typography>
                        

                                
                    </Box>
                </Grid>

                {/* projects */}
                <Grid item xs={4}>
                <Box component="div"
                        sx={{
                            p: 2,
                            border: '1px solid grey',
                            borderRadius: 3,
                            borderColor: 'primary.main',
                            backgroundColor: 'primary.main',
                            boxShadow: 4
                            }}>
                        <Typography variant='h5' align="center">
                            Projects
                        </Typography>
                        

                                
                    </Box>
                </Grid>

                {/* fun stuff */}
                <Grid item xs={4}>
                <Box component="div"
                        sx={{
                            p: 2,
                            border: '1px solid grey',
                            borderRadius: 3,
                            borderColor: 'primary.main',
                            backgroundColor: 'primary.main',
                            boxShadow: 4
                            }}>
                        <Typography variant='h5' align="center">
                            Fun Stuff!
                        </Typography>
                        

                                
                    </Box>
                </Grid>


            </Grid>
        </Container>







    )
}