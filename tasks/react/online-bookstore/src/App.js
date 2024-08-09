import './App.css';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import { setAuthToken } from './services/user';

function App() {
  const token = localStorage.getItem('token')

  if (token) {
    setAuthToken(token)
  }

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
