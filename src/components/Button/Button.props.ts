export default interface IButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   children: React.ReactNode;
   className?: string;
   isForm?: boolean;
   icon?: boolean;
}
