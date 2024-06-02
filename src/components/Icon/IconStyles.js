import styled from 'styled-components';

export const SvgIcon = styled.svg`
  width: ${({ width }) => width || '24px'};
  height: ${({ height }) => height || '24px'};
  fill: ${({ fill }) => fill || 'transparent'};
  stroke: ${({ stroke }) => stroke || 'var(--dark-blue)'};
`;
