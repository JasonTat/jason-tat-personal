import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { theme } from '../theme/theme';


export default function BoxComponent(props) {
    return (
        <Box component="div"
             sx={{
                p: 2,
                border: '1px solid grey',
                borderRadius: 3,
                borderColor: 'primary.main',
                backgroundColor: 'primary.main',
                boxShadow: 4
                }}>
        </Box>
    )
}