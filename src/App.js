import Header from './components/Header';
import SearchItem from './components/SearchItem';
import AddItem from './components/AddItem';
import Content from './components/Content';
import Footer from './components/Footer';
import { AppProvider } from './context/AppContext';

function App() {

  return (
    <div className="App">
      <AppProvider>
        <Header />
        <AddItem />
        <SearchItem />
        <Content />
        <Footer />
      </AppProvider>
    </div>
  );
}

export default App;
