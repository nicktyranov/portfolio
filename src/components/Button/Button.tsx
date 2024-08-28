import IButtonProps from './Button.props';
import cn from 'classnames';
import iconArrow from '/arrow-right-top.svg';
import styles from './Button.module.css';

function Button({ children, icon, isForm, className, ...props }: IButtonProps) {
   return (
      <button
         className={cn(
            styles.button,
            {
               [styles.form]: isForm
            },
            className
         )}
         {...props}
      >
         <div className={styles['button-text']}>{children}</div>
         {icon && <img src={iconArrow} alt="icon Arrow" />}
      </button>
   );
}

export default Button;
