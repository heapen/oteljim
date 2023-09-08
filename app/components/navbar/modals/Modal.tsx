'use client'
import Button from '../../buttons/Button';
import './modal.css'
import {GrClose} from 'react-icons/Gr'

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSumbit: () => void;
  btnLabel: string;
  title: string;
  bodyElement?: React.ReactElement;
  footerElement?: React.ReactElement;
}

const Modal:React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSumbit,
  btnLabel,
  title,
  bodyElement,
  footerElement
}) => {
  const closeFunc = () => {
    onClose();
  }
  const sumbitFunc = () => {
    onSumbit();
  }
  
  return (
    <div className="modal">
      <div className='modal-box'>
        <div className='modal-box-text'>
          <div className='modal-box-text-title'>{title}</div>
          <div onClick={closeFunc}>
            <GrClose size={25}/>
          </div>
        </div>
        <Button
          onSubmit={sumbitFunc}
          btnLabel={btnLabel} 
        />
      </div>
    </div>
  )
}

export default Modal
