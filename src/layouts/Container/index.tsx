import { FC, HTMLProps, ReactElement } from 'react';
// import { twMerge } from 'tailwind-merge';

interface IContainer {
  children: ReactElement;
  className?: HTMLProps<HTMLElement>['className'];
  // className?: React.ComponentProps<'section'>['className'];
}

const Container: FC<IContainer> = ({ children, className }) => {
  return (
    <section
      // className={twMerge(`w-full max-w-[2560px] ${className}`)}
      className={`${className} w-full max-w-[2560px]`}>
      {children}
    </section>
  );
};

export default Container;
