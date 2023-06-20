import React from 'react';
import './button.css'
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--outline2', 'btn--outline3'];
const SIZES = ['btn--medium', 'btn--large'];
export const Button = ({ children, type, onClick, buttonStyle, buttonSize }
) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return (
        <Link to='/patient-forms' className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle}  ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    )
};
export const Button2 = ({ children, type, onClick, buttonStyle, buttonSize }
) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return (
        <Link to='/location' className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle}  ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    )
};

export const Button3 = ({ children, type, onClick, buttonStyle, buttonSize }
) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return (
        <Link target="_blank" to='https://www.google.com/maps/dir//475+International+Dr,+Williamsville,+NY+14221/@42.9746348,-78.8020507,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89d3746593d4e5bf:0xafc616fa3727d7d5!2m2!1d-78.732022!2d42.9746563?entry=ttu' className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle}  ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    )
};
export const Button4 = ({ children, type, onClick, buttonStyle, buttonSize }
) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return (
        <Link target="_blank" to='https://www.google.com/maps/dir//220+Redtail+%238,+Orchard+Park,+NY+14127/@42.7909124,-78.8411803,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89d30f69f1a7c4e1:0x49bc57518c8996e3!2m2!1d-78.7711404!2d42.7909337?entry=ttu' className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle}  ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    )
};