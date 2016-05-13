import * as React from 'react';
import * as ReactDom from 'react-dom';
import store from './store';
import Mapa from './mapa';
import Base from './basex';


class App extends React.Component<{store:any},{}> {  
  render() {
    return (
       <div id="container" >
          <Mapa />
          <Base db={store}></Base>
      </div>
    )
  }
}


ReactDom.render(<App store={store}/>, document.getElementById('app'));
