import type { Metadata } from "next";
import styles from '@/styles/globals.module.scss';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: "El Cafe | Long Island's Newest Coffee Shop",
  description: "El Cafe is a new coffee shop on Long Island. We serve coffee, tea, and pastries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={styles.html}>
      <body className={styles.body}>{children}</body>
    </html>
  );
}
