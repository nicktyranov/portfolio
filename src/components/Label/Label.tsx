import styles from './Label.module.css';
import ILabelProps from './Label.props';
import cn from 'classnames';

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
      >
         {text}
      </div>
   );
}

export default Label;
