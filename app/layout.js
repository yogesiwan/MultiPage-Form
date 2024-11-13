import { AppProvider } from './context/AppContext';
import './globals.css';
import ProgressBar from './components/ ProgressBar';

export const metadata = {
  title: 'Form Wizard',
  description: 'Made by Yogesh Siwan',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='flex justify-center items-center min-h-screen'>
        <AppProvider>
          <ProgressBar />
          {children}
        </AppProvider>
        </div>
      </body>
    </html>
  );
}