import { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { api } from '../services/api';

interface Genre {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface GenresProviderProps {
  children: ReactNode, // Qualquer conteudo válido no react
}

interface GenresContextData {
  genres: Genre[];
  selectedGenreId: number;
  setSelectedGenreId: (id:number) => void;
  fncTest: (id:number) => void;
}

const GenresContext = createContext<GenresContextData>(
  {} as GenresContextData // Força o react a entender que SIM, ele possui esse formato
);

export function GenresProvider({ children }: GenresProviderProps) {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  useEffect(() => {
    api.get<Genre[]>('/genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  function fncTest(id: number){
    console.log('test: '+id);
  }
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
    <GenresContext.Provider value={{ genres, selectedGenreId, setSelectedGenreId, fncTest }}>
      {children}
    </GenresContext.Provider>
  )
}

export function useGenres() {
  const context = useContext(GenresContext);
  return context;
}