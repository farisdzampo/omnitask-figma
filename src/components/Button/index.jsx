import { twMerge } from 'tailwind-merge'

const Button = ({children, className=''}) => {
  return (
    <button
      type="button"
      className={twMerge('mt-8 py-5 px-6 rounded border border-purple-primary font-inter font-bold text-base text-white', className)}
    >
      {children}
    </button>
  );
};

export default Button;
