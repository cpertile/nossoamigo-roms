import './Button.css'
import { ButtonHTMLAttributes } from 'react'

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> =
	({ children, ...props }) => {
		return (<button className='button' {...props}>{children}</button>)
	}

export default Button