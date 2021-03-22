import { useEffect } from 'react';
import { useGenres } from '../../hooks/useGenres';

import { Button } from '../Button';

import { Container, ButtonsContainer } from './styles';

export function SideBar() {
  const { genres, selectedGenreId, setSelectedGenreId } = useGenres();

  function handleClickButton( genreId:number ) {
    setSelectedGenreId(genreId);
  }

  return (
    <Container>
      <span>Watch<p>Me</p></span>
      <ButtonsContainer>
        {genres.map(genre => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </ButtonsContainer>
    </Container>
  ) 
}