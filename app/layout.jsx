import "@/styles/globals.css";

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVJkEzyD6lkDNlzVflZWDESbyXqVZ9+sRetJ7ukqt6Q3RngkLrZAO8Gst0DotS669XXIQec8nw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
