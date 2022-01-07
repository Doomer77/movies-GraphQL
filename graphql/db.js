let movies = [
  {
    id: 1,
    name: "Бетмен-Начало",
    score: 9.0,
  },
  {
    id: 2,
    name: "Бетмен-Темный Рыцарь",
    score: 9.0,
  },
  {
    id: 3,
    name: "Бетмен-Возвращение Легенды",
    score: 9.0,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredPeople = movies.find((movie) => id === movie.id);
  return filteredPeople;
};

export const deletedMovie = (id) => {
  const cleanMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanMovies.length) {
    movies = cleanMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
