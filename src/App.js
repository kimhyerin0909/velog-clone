import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NewPost from './components/NewPost';
import Home from './components/Home';
import "./style.css";
import Recent from './components/Recent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="newpost" element={<NewPost />}/>
          <Route path="recent" element={<Recent />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
