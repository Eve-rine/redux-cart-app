import './App.css';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import store from './redux/store';
import ProductList from './components/ProductsList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});


function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <div style={{ display: 'flex', padding: '20px' }}>
          <ProductList />
          <Cart />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
