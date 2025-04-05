import React,{useContext, useState, useEffect} from 'react'
import {Box, styled} from '@mui/material'
import {DataContext} from '../context/DataProvider'


const ResultContainer = styled(Box)`
    height: 26vh;
    padding: 0px 15px;
`

function Result() {

    const [result, setResult] = useState('');

    const {html, css, js} = useContext(DataContext);

    const SourceCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `

    useEffect(() => {
        const timeout =setTimeout(() => {
            setResult(SourceCode)
        }, 1000)

        return () => clearTimeout(timeout)
    }, [html, css, js]);

  return (
    <ResultContainer>
        <h3>Output: </h3>
        <iframe
            style={{width: '100%', height: '100%', border: 'none'}}
            srcDoc={result}
            title='Output'
            sandbox='allow-scripts'
            width={'100%'}
            height={'100%'}
        />
    </ResultContainer>
  )
}

export default Result