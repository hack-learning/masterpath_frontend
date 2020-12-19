import styled from 'styled-components'

import { colors, mediaQueries } from '../../globalStyles/stylesVariables'

export const Form = styled.form`
  width: 100%;
  height: auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

`

export const Title = styled.label`
  font-size: 24px;
  margin: 10px;
  font-weight: bold;
  color: ${colors.white};
`

export const Input = styled.input`
  width: 592px;
  height: 40px;
  color: ${colors.main};
  border-radius: 10px;
  background: none;
  outline: none;
  font-size: 18px;
  padding: 10px;
  font-family: inherit;
  border: 2px solid ${colors.main};

  ::placeholder {
    color: ${colors.main};
    opacity: 0.5;
  }

  @media ${mediaQueries.littleDesktop}{
    width: 440px;
  }

  @media ${mediaQueries.miniDesktop} {
    width: 350px;
  }
`