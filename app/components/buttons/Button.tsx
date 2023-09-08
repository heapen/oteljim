'use client'

import { IconType } from "react-icons";
import './button.css'

type ButtonProps = {
    onSubmit: (e:React.MouseEvent<HTMLButtonElement>) => void;
    btnLabel: string;
    outline?: boolean;
    icon?: IconType;

}

const Button:React.FC<ButtonProps> = ({
    onSubmit,
    btnLabel,
    outline,
    icon: Icon
}) => {

    const selectedOutline = outline ? 'button-outline-ture':'button-outline-false'

  return (
    <button onClick={onSubmit} className={`button ${selectedOutline}`}>
    {Icon && <Icon size={25}/>}
    {btnLabel}
    </button>
  )
}

export default Button
