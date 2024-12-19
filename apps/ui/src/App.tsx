import './App.css';
import { LoggerService } from 'core-ui-lib';

function App() {
  const logger = new LoggerService();

  console.log(logger);

  return <div></div>;
}

export default App;
