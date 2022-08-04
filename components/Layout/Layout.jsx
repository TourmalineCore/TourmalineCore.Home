import { ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="layout">
      <Header />
<<<<<<< HEAD:components/Layout/Layout.jsx
      <main className="container">{children}</main>

=======
      <main>
        {children}
      </main>
>>>>>>> develop:components/Layout/Layout.tsx
      <Footer />
    </div>
  );
}