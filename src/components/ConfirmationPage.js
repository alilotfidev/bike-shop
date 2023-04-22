import '../css/ConfirmationPage.css';
// lotie library for animation
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../lotties/order-confirmed.json';
// for redirecting to the home page
import { useHistory } from 'react-router-dom';

const ConfirmationPage = () => {
  const history = useHistory();
  return (
    <div className='ConfirmationPage'>
      <Player
        className='confirmation-animation'
        autoplay
        loop
        src={animationData}
      ></Player>
      <div className='confirmation-content'>
        <h2 className='confirmation-title'>Your order has been received</h2>
        <p className='confirmation-text'>
          You will be receiving a confirmation email with more details
        </p>
        <button
          className='confirmation-home-button btn'
          onClick={() => history.push('/')}
        >
          Home Page
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
