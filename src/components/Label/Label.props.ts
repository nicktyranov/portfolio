export default interface ILabelProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   text: string;
   forFilter?: boolean;
   className?: string;
}
