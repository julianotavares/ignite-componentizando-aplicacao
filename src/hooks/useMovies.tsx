import { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { api } from '../services/api';

interface Movie {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface MoviesProviderProps {
  children: ReactNode, // Qualquer conteudo válido no react
}

interface MoviesContextData {
  movies: Movie[];
}

const MoviesContext = createContext<MoviesContextData>(
  {} as MoviesContextData // Força o react a entender que SIM, ele possui esse formato
);

export function MoviesProvider({ children }: MoviesProviderProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  
  useEffect(() => {
    api.get<Movie[]>('/movies').then(response => {
      setMovies(response.data);
    });
  }, []);

  // async function createTransaction(transactionInput: TransactionInput) {
  //   const response = await api.post('/transactions', {
  //     ...transactionInput,
  //     createdAt: new Date(),
  //   });
    
  //   const { transaction } = response.data;
  //   setTransactions([
  //     ...transactions,
  //     transaction,
  //   ]);
  // }

  return (
    <MoviesContext.Provider value={{ movies }}>
      {children}
    </MoviesContext.Provider>
  )
}

export function useMovies() {
  const context = useContext(MoviesContext);
  return context;
}