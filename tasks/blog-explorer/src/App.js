import './App.css';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="App">
      <div style={{ minHeight: "80vh" }}>
        <Header />
      </div>
      <Footer />
    </div>
  );
}

export default App;
