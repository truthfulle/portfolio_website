import { NavbarProvider } from './components/ui/NavbarContext';
import Navbar from './components/ui/Navbar';
import ScrollIndicator from './components/ui/ScrollIndicator';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavbarProvider>
          <Navbar />
          {children}
        </NavbarProvider>
        <ScrollIndicator />
      </body>
    </html>
  );
}