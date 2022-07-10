import styled from 'styled-components'
// import classes from './Radio.module.css'


function RadioButton(props) {
   return (
      <div >
        <form action="">
            <label>
                <input type="radio" id="html" name="radio" />
                <span>{props.name}</span>
            </label>     
        </form>
    </div>
   )
}
export default RadioButton

// // const Input = styled.input`
// //   background-color: red;
// //   color: black;
// //   border: 1px solid red;


// `
