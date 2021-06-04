import './App.css';
import Expert from './Expert';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import Review from './Review';
import Sample from './Sample';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Expert/>
      <Review/>
      <Sample/>
      <Footer/>
    </div>
  );
}

export default App;
