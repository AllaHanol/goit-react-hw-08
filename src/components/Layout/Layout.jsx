import AppBar from '../AppBar/AppBar';
import { Suspense } from 'react';

const Layout = ({children}) => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </>
  );
};

export default Layout;