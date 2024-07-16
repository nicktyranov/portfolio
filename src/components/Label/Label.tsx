import ILabelProps from './Label.props';
import cn from 'classnames';
import styles from './Label.module.css';

function Label({ text, forFilter, className, ...props }: ILabelProps) {
   return (
      <div
         className={cn(
            styles.label,
            {
               [styles.filter]: forFilter
            },
            className
         )}
         {...props}
      >
         {text}
      </div>
   );
}

export default Label;
