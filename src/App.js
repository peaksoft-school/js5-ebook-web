import AddAbook from './containers/vendorMainPage/AddAbook'
import VendorLayout from './layouts/VendorLayout'

// const url = 'https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3'

function App() {
   return (
      <div className="App">
         <VendorLayout>
            <AddAbook />
         </VendorLayout>
      </div>
   )
}

export default App
