import "../styles/globals.css"
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/footer"
import { UserProvider } from "@/context/UserContext"


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>
        <title>Isla de Marea - Tienda de artefactos</title>
      </head>

      <body>
        <UserProvider>
          <Header />
          {children}
        </UserProvider>
        <Footer />
      </body>
    </html>
  )
}
