import styled from 'styled-components';

interface ContainerProps {
    maxWidth?: string;
    padding?: string;
    children: React.ReactNode;
}

const Container = styled.div<ContainerProps>`
  max-width: ${({ maxWidth }) => maxWidth || '1200px'};
  padding: ${({ padding }) => padding || '0 20px'};
  margin: 0 auto;
  width: 100%;
`;

export default Container;