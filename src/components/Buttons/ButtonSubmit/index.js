import styled from 'styled-components'

const Button = styled.button`
     border-radius: 3px;
     height: 30px;
     padding: 0.25em 1em;
     margin: 0 1em;
     background: ${props => (props.active ? '#323967' : '#6568c9')};
     border: 2px solid #384073;
     cursor: pointer;
     color: white;
     font-family: 'Arvo', serif;
`
export default Button
