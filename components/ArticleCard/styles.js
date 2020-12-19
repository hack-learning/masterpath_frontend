import styled from 'styled-components'

import { hoverScale } from '../../globalStyles/animations'
import { colors, mediaQueries } from '../../globalStyles/stylesVariables'

export const Card = styled.a`
  width: 873px;
  height: 52px;
  text-decoration: none;
  background-color: ${colors.lightSecond};
  border-radius: 10px;
  font-size: 18px;
  margin: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 3px 3px 5px black;
  overflow: hidden;

  &:hover {
    ${hoverScale};
  }

  @media ${mediaQueries.desktop} {
    width: 708px;
  }

  @media ${mediaQueries.littleDesktop}{
    width: 475px;
  }

  @media ${mediaQueries.miniDesktop} {
    width: 350px;
  }

  @media ${mediaQueries.tablet} {
    width: 300px;
  }

  @media ${mediaQueries.mobile} {
    width: 220px;
  }
`

export const Title = styled.h3`
  margin: 10px;
  color: ${colors.white};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`