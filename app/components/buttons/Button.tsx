'use client'

import { IconType } from "react-icons";

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

    const selectedOutline = outline? 'button-outline-ture' : 'button-outline-false';
    
  return (
    <button onClick={onSubmit} className={`${selectedOutline} button`}>

    </button>
  )
}

export default Button
