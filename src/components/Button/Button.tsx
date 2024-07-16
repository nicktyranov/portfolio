import styles from './Button.module.css';
import IButtonProps from './Button.props';
import cn from 'classnames';
import iconArrow from '/arrow-right-top.svg';

function Button({ children, icon, form, className, ...props }: IButtonProps) {
   return (
      <button
         className={cn(
            styles.button,
            {
               [styles.form]: form
            },
            className
         )}
      >
         {children} {icon && <img src={iconArrow} alt="icon Arrow" />}
      </button>
   );
}

export default Button;
