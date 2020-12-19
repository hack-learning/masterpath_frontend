import styled from 'styled-components'

import { mediaQueries, colors } from '../../globalStyles/stylesVariables'

export const Container = styled.div`
  height: 280px;
  width: 872px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media ${mediaQueries.littleDesktop}{
    width: 436px;
  }
  @media ${mediaQueries.miniDesktop}{
    width: 436px;
  }
  @media ${mediaQueries.tablet}{
  }
  @media ${mediaQueries.mobile}{
  }
`

export const Title = styled.h1`
  color: ${colors.white};
  margin: 10px;
  font-size: 24px;
`