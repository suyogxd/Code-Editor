import React, { useState } from 'react';
import { Box, styled } from '@mui/material';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { javascript } from '@codemirror/lang-javascript';
import { css } from '@codemirror/lang-css';
import { autocompletion } from '@codemirror/autocomplete';
import { closeBrackets } from '@codemirror/autocomplete';
import { oneDark } from '@codemirror/theme-one-dark';

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
`;

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  background: #060606;
  color: #aaaebc;
  font-weight: 700;
`;

const EditorContainer = styled(Box)`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  padding: 0px 7px;
`;

function Editor({ heading, displayName, icon, value, onChange }) {
  const [open, setOpen] = useState(true);

  const getExtensions = () => {
    switch (heading) {
      case 'xml':
        return [html(), autocompletion(), closeBrackets()];
      case 'javascript':
        return [javascript(), autocompletion(), closeBrackets()];
      case 'css':
        return [css(), autocompletion(), closeBrackets()];
      default:
        return [];
    }
  };

  return (
    <EditorContainer style={open ? null : { flexGrow: 0 }}>
      <Header>
        <Heading>
          <Box
            className="icon"
            component="span"
            style={{
              height: 20,
              width: 20,
              display: 'flex',
              placeContent: 'center',
              borderRadius: 5,
              marginRight: 5,
              paddingBottom: 2,
            }}
          >
            {icon}
          </Box>
          {displayName}
        </Heading>
        <FullscreenExitIcon onClick={() => setOpen(!open)} />
      </Header>

      <CodeMirror
        value={value}
        height="47vh"
        theme={oneDark}
        extensions={getExtensions()}
        onChange={(val) => onChange(val)}
        basicSetup={{
          lineNumbers: true,
          closeBrackets: true,
          autocompletion: true,
        }}
      />
    </EditorContainer>
  );
}

export default Editor;
