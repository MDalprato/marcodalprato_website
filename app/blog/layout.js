import BlogShell from '../components/BlogShell';

export default function BlogLayout({ children }) {
  return (
    <BlogShell>
      <div className="site site--with-footer">{children}</div>
    </BlogShell>
  );
}
