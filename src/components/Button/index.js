import styled from 'styled-components'

const ButtonSubmit = styled.button`
     min-width: 55px;
     min-height: 30px;
     border-radius: 3px;
     padding: 0.25em 1em;
     margin: 0 1em;
     background: ${props => (props.primary ? '#84CF96' : 'white')};
     border: 2px solid #84CF96;
     cursor: pointer;
`
export default ButtonSubmit
