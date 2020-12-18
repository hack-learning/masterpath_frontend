import { css, keyframes } from 'styled-components'

const hoverScaleKeyFrames = keyframes`
  from {
    transform: scale(1);
    box-shadow: 0px 0px 5px grey;
  }

  to {
    transform: scale(1.01);
    box-shadow: 5px 5px 5px grey;
  }
`

export const hoverScale = ({ time = '.5s', type = 'ease' } = {}) => (
  css`
    animation: ${time} ${hoverScaleKeyFrames} ${type};
    animation-fill-mode: forwards;
  `
)
