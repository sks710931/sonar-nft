
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home.page';
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import {useEagerConnect} from "./connectors/use-eager-connect";

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}
function App() {
  useEagerConnect();
  return (
    <BrowserRouter>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
      </Web3ReactProvider>
    </BrowserRouter>
  );
}

export default App;
