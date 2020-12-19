import styled from 'styled-components'

import { mediaQueries, colors } from '../../globalStyles/stylesVariables'

export const Container = styled.div`
  height: auto;
  width: 100%;
`

export const News = styled.div`
  height: auto;
  width: 100%;
  max-width: 1300px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

`

export const Title = styled.h1`
  color: ${colors.white};
  margin: 10px 10px 10px 100px;
  font-size: 24px;
`