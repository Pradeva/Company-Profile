import Link from 'next/link';

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300';

const variants = {
  primary: 'bg-accent text-white shadow-soft hover:bg-accent-strong',
  outline: 'border border-line bg-white text-content hover:border-accent hover:text-accent',
  onDark: 'bg-white text-content hover:bg-accent-soft',
};

export default function Button({ href, variant = 'primary', className = '', children, ...props }) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) {
    const external = href.startsWith('http');
    return (
      <Link
        href={href}
        className={cls}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
