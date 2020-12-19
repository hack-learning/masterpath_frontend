import styled from 'styled-components';
import { colors } from '../../globalStyles/stylesVariables';

export const ModalSelectProject = styled.div`
  width: 20%;
  height: 200px;
  left: 40%;
  border-radius: 20px;
  background-color: ${colors.second};
  opacity: .93;
  position: absolute;
  display: ${props => props.open === true ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 10;

  h1{
      align-self: center;
      color: ${colors.main}
  }
  img{
      cursor: pointer;
      position: absolute;
      left: 15px;
      top: 15px;
  }
`
 