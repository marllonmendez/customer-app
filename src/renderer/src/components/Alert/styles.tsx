import styled from 'styled-components';

interface AlertContainerProps {
  show: boolean;
}

export const AlertContainer = styled.p<AlertContainerProps>`
  margin-top: 20px;
  text-align: center;
  color: var(--secondary-color);
  border-radius: 4px;
  //box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;
