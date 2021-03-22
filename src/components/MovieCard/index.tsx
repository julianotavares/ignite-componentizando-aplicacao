import { Star, Clock } from 'react-feather';

import { Container, MovieInfo, Meta } from './styles';

interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
}

export function MovieCard(props: MovieCardProps) {
  return (
    <Container>
      <img
        src={props.poster}
        alt={props.title}
      />

      <div>
        <MovieInfo>
          <span>{props.title}</span>
          <Meta>
            <div>
              <Star /> {props.rating}
            </div>

            <div>
              <Clock /> {props.runtime}
            </div>
          </Meta>
        </MovieInfo>
      </div>
    </Container>
  )
}