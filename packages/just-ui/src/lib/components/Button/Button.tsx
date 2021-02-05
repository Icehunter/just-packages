import React, { ButtonHTMLAttributes, CSSProperties, FC, useMemo } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * onClick handler, defaults to empty
   */
  onClick?: () => void;
}

export const Button: FC<IButtonProps> = (props) => {
  const {
    children,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClick = (): void => {},
    ...rest
  } = props;

  const styles = useMemo((): CSSProperties => {
    return {
      padding: '10px',
      border: '2px solid #61dafb',
      borderRadius: '5px',
      textTransform: 'uppercase',
      color: 'black',
      cursor: 'pointer'
    };
  }, []);

  return (
    <button style={styles} onClick={onClick} {...rest}>
      {children ?? 'EMPTY props.children'}
    </button>
  );
};
