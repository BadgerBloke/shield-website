import { cn } from '~/lib/utils';

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'blockquote' | 'code' | 'lead' | 'large' | 'small' | 'muted' | 'error' | 'tiny';

const Typography = ({ variant, children, className }: { variant: TypographyVariant; children: React.ReactNode; className?: string }) => {
    const baseClass = 'prose dark:prose-invert';

    switch (variant) {
        case 'h1': {
            return (
                <div className={cn(baseClass, 'lg:prose-lg 2xl:prose-xl max-w-none', className)}>
                    <h1>{children}</h1>
                </div>
            );
        }
        case 'h2': {
            return (
                <div className={cn(baseClass, 'lg:prose-lg 2xl:prose-xl max-w-none', className)}>
                    <h2>{children}</h2>
                </div>
            );
        }
        case 'h3': {
            return (
                <div className={cn(baseClass, 'lg:prose-lg 2xl:prose-xl', className)}>
                    <h3 className={cn(baseClass, className)}>{children}</h3>
                </div>
            );
        }
        case 'h4': {
            return (
                <div className={cn(baseClass, 'lg:prose-lg 2xl:prose-xl', className)}>
                    <h4>{children}</h4>
                </div>
            );
        }
        case 'p': {
            return (
                <div className={cn(baseClass, className)}>
                    <p>{children}</p>
                </div>
            );
        }
        case 'blockquote': {
            return <blockquote className={cn(baseClass, 'mt-6 border-l-2 pl-6 italic', className)}>{children}</blockquote>;
        }
        case 'code': {
            return (
                <code className={cn(baseClass, 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold', className)}>
                    {children}
                </code>
            );
        }
        case 'lead': {
            return <p className={cn(baseClass, 'prose-lg text-muted-foreground', className)}>{children}</p>;
        }
        case 'large': {
            return <div className={cn(baseClass, 'prose-lg font-semibold', className)}>{children}</div>;
        }
        case 'small': {
            return <small className={cn(baseClass, 'prose-sm font-medium leading-none', className)}>{children}</small>;
        }
        case 'muted': {
            return <span className={cn(baseClass, 'prose-sm text-muted-foreground', className)}>{children}</span>;
        }
        case 'error': {
            return <small className={cn(baseClass, 'prose-sm text-rose-500', className)}>{children}</small>;
        }
        case 'tiny': {
            return <small className={cn(baseClass, 'prose-sm leading-3', className)}>{children}</small>;
        }
        default: {
            return <></>;
        }
    }
};

export default Typography;
