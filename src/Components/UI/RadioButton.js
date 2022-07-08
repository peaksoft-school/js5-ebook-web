function RadioButton(props) {
   return (
      <label>
         <input
            type="radio"
            value="male"
            name="contact"
            checked={props.gender === 'male'}
            onClick={() => props.getname(props.name)}
         />
         {props.name}
      </label>
   )
}
export default RadioButton
