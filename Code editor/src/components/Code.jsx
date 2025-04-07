import React from 'react'
import Editor from './Editor'
import htmlImg from '../assets/html.png'
import cssImg from '../assets/css.png'
import jsImg from '../assets/js.png'
import { Box, styled } from '@mui/material'
import { DataContext } from '../context/DataProvider'
import { useContext } from 'react'

const Container = styled(Box)`
    display: flex;
    background: #060606;
    height: 55vh;
  `
function Code() {

  const {html, setHtml, css, setCss, js, setJs} = useContext(DataContext);
  
  return (
    <Container style={{paddingTop: 25}}>
      <Editor 
        heading="xml"
        displayName="HTML" 
        icon={<img src={htmlImg} 
        alt="image didnot load" />}
        value={html}
        onChange={setHtml}
        />
      <Editor 
        heading="css"
        displayName="CSS"
        icon={<img src={cssImg} 
        alt="image didnot load" />}
        value={css}
        onChange={setCss}
        />
      <Editor 
        heading="javascript"
        displayName="JS" 
        icon={<img src={jsImg} 
        alt="image didnot load" />}
        value={js}
        onChange={setJs}
        />
    </Container>
  )
}

export default Code