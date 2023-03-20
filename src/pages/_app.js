import '../styles/globals.css'
import '../styles/color.css'
import '../styles/minireset.css'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { AuthProvider } from '../context/auth'
import { GraphqlProvider } from '../context/graphql'
import { ThemeProvider } from '../context/theme'
import { LanguageProvider } from '../context/language'
import DefaultLayout from '../components/layouts/default'

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout

  return (
    <ThemeProvider>
      <LanguageProvider>
        <GraphqlProvider>
          <Provider store={store}>
            <AuthProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </AuthProvider>
          </Provider>
        </GraphqlProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}
export default MyApp
