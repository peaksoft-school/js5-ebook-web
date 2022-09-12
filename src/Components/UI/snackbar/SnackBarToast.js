import { Toaster } from 'react-hot-toast'

export const Toast = () => {
   return (
      <Toaster
         position="top-right"
         reverseOrder={false}
         gutter={8}
         containerClassName=""
         containerStyle={{}}
         toastOptions={{
            // Define default options
            className: '',
            duration: 5000,
            style: {
               fontFamily: 'Open Sans',
               backgroundColor: 'white',
               color: 'black',
            },

            // Default options for specific types
            success: {
               duration: 3000,
               theme: {
                  primary: 'green',
                  secondary: 'black',
               },
            },
         }}
      />
   )
}
