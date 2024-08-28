import { DetailedHTMLProps, HTMLAttributes } from 'react';

export default interface ILabelProps
   extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   text: string;
   forFilter?: boolean;
   className?: string;
}
