import '../styles/global.css';
import type { AppProps } from 'next/app';


//ADICIONAR O AUTHPROVIDER E QUERY CLIENT PROVIDER AQUI
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

// const AppFuncionario = ({ Component, pageProps }: AppProps) => {
//   return (
//     <AuthProvider>
//       <QueryClientProvider client={queryClient}>
//         <ThemeProvider theme={theme}>
//           <CssBaseline />
//           <Component {...pageProps} />
//           <ToastContainer autoClose={5000} theme="colored" />
//         </ThemeProvider>
//       </QueryClientProvider>
//     </AuthProvider>
//   )
// }

// export default AppFuncionario
