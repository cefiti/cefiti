import React from 'react'
import Head from '../src/head'

const Browser = () => (
  <div id="resolucao">
    <Head />
    <div style={style.container}>
      <div>
        <div>
          <span style={style.first}>O navegador utilizado não é suportado.</span>
          <span style={style.second}>
            O CEFiTI requer o uso de um dos navegadores a seguir: Google Chrome, Mozilla Firefox,
            Microsoft Edge, Internet Explorer 11 ou Safari.
            <br />
            <br />
            <i>Obrigado.</i>
          </span>
        </div>
      </div>
    </div>
  </div>
)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const style: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: "'Helvetica', Arial, Verdana, sans-serif",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    width: '600px',
    height: '400px',
    background: '#f3f3f3',
    zIndex: 950,
    borderRadius: '4px',
    border: '1px solid #e3e3e3',
    boxSizing: 'border-box',
    padding: '40px',
    textAlign: 'center',
    color: '#333',
    textShadow: '0px 1px 1px white',
    boxShadow: '0px 2px 30px #6a6a6a',
  },
  first: {
    display: 'block',
    marginBottom: '50px',
    fontSize: '32px',
    fontWeight: 600,
  },
  second: {
    fontSize: '22px',
    fontWeight: 200,
    color: '#616161',
  },
}

export default Browser
