import { createPortal } from 'react-dom';

interface IModalProps {
  close: () => void;
  children: JSX.Element | JSX.Element[];
  className: string;
}

const Backdrop = ({ children, close }: any) => {
  return (
    <div
      className='fixed top-0 left-0 h-screen w-screen bg-black/50 flex items-center justify-center'
      onClick={() => close()}
    >
      {children}
    </div>
  );
};

const Modal: React.FC<IModalProps> = ({ close, children, className }) => {
  return (
    <Backdrop close={close}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={className}
      >
        {children}
      </div>
    </Backdrop>
  );
};

export default Modal;
