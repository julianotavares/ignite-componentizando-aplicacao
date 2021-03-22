import styled from 'styled-components';

export const Container = styled.div`
  max-width: 52.5rem;
  width: 100%;
  margin: 0 auto;
`;

export const Main = styled.main`
  width: 100%;
  margin-top: 5.625rem;
`;

export const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4.75rem;
  list-style: none;
`;