import styled from 'styled-components'

const Product = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.displayType === 'row' ? 'row' : 'column')};
  align-items: center;
  padding: 10px;
  margin: 5px;
  height: ${(props) => (props.displayType === 'row' ? '40px' : '200px')};
  width: ${(props) => (props.displayType === 'row' ? '100%' : '150px')};
  background-color: #3e966c;
  color: #fff;
`
export default Product
