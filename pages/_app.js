import ThemeProvider from '@/context/ThemeContext';
import UserProvider from '@/context/UserContext';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  );
}
