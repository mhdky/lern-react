import clsx from 'clsx';

export default function Button(props) {
    const { children, className = 'bg-blue-600' } = props;

    return (
        <button
            {...props}
            className={clsx(
                className,
                'w-max px-4 py-2 flex items-center gap-2 text-white rounded'
            )}
        >
            {children}
        </button>
    );
}
