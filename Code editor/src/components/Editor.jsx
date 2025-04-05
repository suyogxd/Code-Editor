import React, {useState} from 'react'
import {Box, styled} from '@mui/material'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import {Controlled as ControlledEditor} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';


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

const EditorContainer = styled(Box)`
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    padding: 0px 7px;
`

function Editor({heading, icon, value, onChange}) {

    const [open, setOpen] = useState(true);

    const handleChange = (editor, data, value) => {
        onChange(value)
    }
    
  return (
    <EditorContainer style={ open ? null : {flexGrow: 0} }>
        <Header>
            <Heading> 
                <Box className='icon'
                component="span"
                style={{
                    height:20,
                    width:20,
                    display:'flex',
                    placeContent:'center',
                    borderRadius: 5,
                    marginRight:5,
                    paddingBottom:2,
                }}>{icon}</Box>
                {heading}
            </Heading>
            <FullscreenExitIcon 
                onClick={() => setOpen(!open)}
            />
        </Header>
        <ControlledEditor
            className='controlled-editor'
            value={value}
            onBeforeChange={handleChange}
            options= {{
                lineNumbers: true,
                mode: 'xml',
                theme: 'material',
                lineWrapping: true
            }}
        />
    </EditorContainer>
  )
}

export default Editor