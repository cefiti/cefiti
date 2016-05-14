import * as React from 'react';
import * as ReactDom from 'react-dom';
import store from './store';
import Mapa from './mapa';
import Base from './basex';
import Menu from './menu';



class App extends React.Component<{store:any},{}> {  
  render() {
    return (
       <div id="container" >
          <Menu/>
          <Mapa />
          <Base db={this.props.store.db}></Base>
      </div>
    )
  }
}


ReactDom.render(<App store={store}/>, document.getElementById('app'));
