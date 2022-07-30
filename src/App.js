import Modal from './Components/UI/Modal'
import SignUpVendor from './Components/UI/signUp/SignUpVendor'

function App() {
   return (
      <div className="App">
         <Modal open width="497px" height="400px" justifyContent="flex-start">
            <SignUpVendor />
         </Modal>
      </div>
   )
}

export default App
