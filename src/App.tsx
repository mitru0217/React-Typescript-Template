import './styles.css';
import IMAGE from './logo192.png';
import LOGO from './react-2.svg';
import { ClickCounter } from './ClickCounter';

export const App = () => {
  return (
    
    <>
      <h1>
        React Typescript - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={IMAGE} alt="React Logo" width="200" height="200" />
      <img src={LOGO} alt="React Logo" width="200" />
      <ClickCounter />
    </>
  );
};
