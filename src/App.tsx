import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ConnectedRouter } from 'connected-react-router';
import { configureStore, getHistory } from './modules/store';
import RoutesComponent from './modules/shared/routes/RoutesComponent';
import {  } from 'redux';
import { Provider } from 'react-redux';

const store = configureStore();


export default function App(props:any){
  return(
    <Provider store={store}>
      <AppWithRedux {...props}></AppWithRedux>
    </Provider>
  )
}

function AppWithRedux(props :any){
  return(
    <AppWithSnackBar {...props}></AppWithSnackBar>
  )
}

function AppWithSnackBar(props: any){
  // const { enqueueSnackbar } = useSnackbar();
  return(
    <>
    {/* <ConnectedRouter 
    history={getHistory()}
    > */}
      <RoutesComponent />
    {/* </ConnectedRouter> */}
  </>
  )
}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {/* <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//     </div>
//   );
// }

// export default App;
