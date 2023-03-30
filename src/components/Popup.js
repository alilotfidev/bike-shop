import '../css/Popup.css';
const Popup = ({ popupText, popupTextColor, PopupBackgroundColor }) => {
  return (
    <div
      className='Popup'
      style={{ backgroundColor: PopupBackgroundColor, color: popupTextColor }}
    >
      <p className='popup-text'>{popupText}</p>
    </div>
  );
};

export default Popup;
