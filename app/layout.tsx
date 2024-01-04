
import { Layout } from '@/components/dom/Layout'
import '@/global.css'
import '@/css/styles.css'

export const metadata = {
  title: 'HMS Victory',
  description: 'A interactive journey through the history of the HMS Victory',
}

export default function RootLayout({ children }) {

  return (
    <html lang='en' className='antialiased'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav className='absolute left-10 top-2 z-50'>
            <a className="mr-6 uppercase text-white" href="/">Home</a>
            <a className="uppercase text-white" href="/about">About</a>
          </nav>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
