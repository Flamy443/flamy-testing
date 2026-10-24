export const metadata = {
  title: "Hero Section Demo",
  description: "Animal hospital hero section layout demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Helvetica, Arial, sans-serif", boxSizing: "border-box" }}>
        {children}
      </body>
    </html>
  );
}
