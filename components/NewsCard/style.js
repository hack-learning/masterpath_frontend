import styled from "styled-components";

import { hoverOpacity } from '../../globalStyles/animations'
import { colors } from '../../globalStyles/stylesVariables'

export const Card = styled.div`
  width: 416px;
  height: 120px;
  border-radius: 20px;
  background-color: ${colors.lightSecond};
  opacity: 1;
  overflow: hidden;
  box-shadow: 5px 5px 5px black;
  color: ${colors.main};
  display: grid;
  grid-template-columns: 73% 27%;

  &:hover{
    cursor: pointer;
    ${hoverOpacity}
  }

`

export const NewsTitle = styled.h3`
  font-size: 18px;
  margin: 15px;
  overflow: hidden;
  grid-column: 1 / 2;
`

export const ImgContainer = styled.div`
  width: 85px;
  height: 85px;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
  align-self: center;
  grid-column: 2 / 3;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`