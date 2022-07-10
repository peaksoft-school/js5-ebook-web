
function RadioButton({ name }) {
   return (
      <div>
         <form>
            <label>
               <input type="radio" id="html" name="radio" />
               <span>{name}</span>
            </label>
         </form>
      </div>
   )
}
export default RadioButton

