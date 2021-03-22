import { Container, Category } from './styles';

interface HeaderProps {
  selectedGenreTitle: string;
}

export function Header({ selectedGenreTitle } : HeaderProps) {
  return (
    <Container>
      <Category>Categoria:
        <span>
          {selectedGenreTitle}
        </span>
      </Category>
    </Container>
  ) 
}