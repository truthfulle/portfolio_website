import Navbar from './components/navbar';
import ScrollIndicator from './components/ScrollIndicator';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-100">
        <Navbar />
        <main>{children}</main>
        <ScrollIndicator/>
      </body>
    </html>
  );
}