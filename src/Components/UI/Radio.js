import styled from 'styled-components'
import RadioButton from './RadioButton'

const arr = ['Бумажная', 'Аудиокнига', 'Электронная книга']

const Radio = () => {
   const [gender, setGender] = React.useState('male')
   function getname(a) {
      console.log(a)
   }

   const handleChange = (event) => {
      setGender(event.target.value)
   }
   return (
      <Div>
         {arr.map((elem, index) => {
            return (
               <RadioButton
                  key={index}
                  name={elem}
                  gender={gender}
                  handleChange={handleChange}
                  getname={getname}
               />
            )
         })}
      </Div>
   )
}
export default Radio

const Div = styled.div`
   display: flex;
   justify-content: space-between;
   width: 400px;
   accent-color: #f34901;
`
