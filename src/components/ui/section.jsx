// Varian latar: default (putih), muted (abu terang), dark (navy kontras).
const bgMap = {
  default: 'bg-base',
  muted: 'bg-base-muted',
  dark: 'bg-invert',
};

export default function Section({ id, variant = 'default', children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 lg:py-28 ${bgMap[variant]} ${className}`}>
      <div className="mx-auto w-full max-w-content px-6 lg:px-10">{children}</div>
    </section>
  );
}
