import logo from './logo.svg';
import './App.css';
import Dua_ubahDataJson from './soal/Dua_ubahDataJson';
import Tiga_requestUrl from './soal/Tiga_requestUrl';
import Empat_10DatatoTabel from './soal/Empat_10DatatoTabel';
import Lima_hapusData from './soal/Lima_hapusData';
import Enam_deleteKey from './soal/Enam_deleteKey';
import Tujuh_sha256 from './soal/Tujuh_sha256';
import Sembilan_Login from './soal/Sembilan_Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="App">
    
    <Router>
    <div>
      <ul>
        
        <li>
          <Link to="/soal2">Soal nomor 2</Link>
        </li>
        <li>
          <Link to="/soal3">Soal nomor 3</Link>
        </li>
        <li>
          <Link to="/soal4">Soal nomor 4</Link>
        </li>
        <li>
          <Link to="/soal5">Soal nomor 5</Link>
        </li>
        <li>
          <Link to="/soal6">Soal nomor 6</Link>
        </li>
        <li>
          <Link to="/soal7">Soal nomor 7</Link>
        </li>
        <li>
          <Link to="/soal9">Soal nomor 9</Link>
        </li>
      </ul>

      <hr />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/soal2">
          <Dua_ubahDataJson />
        </Route>
        <Route path="/soal3">
          <Tiga_requestUrl />
        </Route>
        <Route path="/soal4">
          <Empat_10DatatoTabel />
        </Route>
        <Route path="/soal5">
          <Lima_hapusData />
        </Route>
        <Route path="/soal6">
          <Enam_deleteKey/>
        </Route>
        <Route path="/soal7">
          <Tujuh_sha256/>
        </Route>
        <Route path="/soal9">
          <Sembilan_Login/>
        </Route>
      </Switch>
    </div>
  </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Result test Ridwan</h2>
    </div>
  );
}
export default App;
