import React from 'react'
import {Box, styled} from '@mui/material'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import {Controlled as ControlledEditor} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

function Editor() {

    const Heading = styled(Box)
    `
        background: #1d1e22;
        display: flex;
        padding: 9px 12px;
    `

    const Header = styled(Box)
    `
        display: flex;
        justify-content: space-between;
        background: #060606;
        color: #aaaebc;
        font-weight: 700;
    `
  return (
    <Box>
        <Header>
            <Heading> 
                <Box className='icon'
                component="span"
                style={{
                    background: 'red',
                    height:20,
                    width:20,
                    display:'flex',
                    placeContent:'center',
                    borderRadius: 5,
                    marginRight:5,
                    paddingBottom:2,
                }}>/</Box>
                HTML
            </Heading>
            <FullscreenExitIcon />
        </Header>
        <ControlledEditor
            className='controlled-editor'
            options= {{
                lineNumbers: true,
                mode: 'xml',
                theme: 'material',
                lineWrapping: true
            }}
        />
    </Box>
  )
}

export default Editor