import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/App';
import '../src/app/styles/index.css';
import { store } from './app';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
