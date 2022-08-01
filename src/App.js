import Modal from './Components/UI/Modal'
import SignUpVendor from './Components/UI/signUp/SignUpVendor'

function App() {
   return (
      <div className="App">
         <Modal open justifyContent="flex-start" height="90vh">
            <SignUpVendor />
         </Modal>
      </div>
   )
}

export default App
