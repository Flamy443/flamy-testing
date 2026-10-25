import "./globals.css";

export const metadata = {
  title: "Animal Hospital Page Demo",
  description: "Animal hospital homepage layout demo with placeholder content",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
