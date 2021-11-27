import React from 'react';
import Link from 'next/link';

const Button = (props) => {
  if (props.href) {
    return (
      <a
        className={`button button--${props.size || 'default'} ${
          props.inverse && 'button--inverse'
        } ${props.danger && 'button--danger'}`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        href={props.to}
        // exact={props.exact}
        className={`button button--${props.size || 'default'} ${
          props.inverse && 'button--inverse'
        } ${props.danger && 'button--danger'}`}
      >
        <a className='custom--button'>{props.children}</a>
      </Link>
    );
  }
  return (
    <button
      className={`button button--${props.size || 'default'} ${
        props.inverse && 'button--inverse'
      } ${props.danger && 'button--danger'}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
      <style jsx>{`
        .button {
          font: inherit;
          padding: 0.5rem 1.5rem;
          border: 1px solid #ff0055;
          border-radius: 4px;
          background: #ff0055;
          color: white;
          cursor: pointer;
          margin-right: 1rem;
          text-decoration: none;
          display: inline-block;
        }

        .button:focus {
          outline: none;
        }

        .button:hover,
        .button:active {
          background: #ff4382;
          border-color: #ff4382;
        }

        .button--inverse {
          background: transparent;
          color: #ff0055;
        }

        .button--inverse:hover,
        .button--inverse:active {
          color: white;
          background: #ff0055;
        }

        .button--danger {
          background: #830000;
          border-color: #830000;
        }

        .button--danger:hover,
        .button--danger:active {
          background: #f34343;
          border-color: #f34343;
        }

        .button:disabled,
        .button:hover:disabled,
        .button:active:disabled {
          background: #ccc;
          color: #979797;
          border-color: #ccc;
          cursor: not-allowed;
        }

        .button--small {
          font-size: 0.8rem;
        }

        .button--big {
          font-size: 1.5rem;
        }
      `}</style>
    </button>
  );
};

export default Button;
