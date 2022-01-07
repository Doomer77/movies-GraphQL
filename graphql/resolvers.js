import { getById, addMovie, getMovies } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => {
      return addMovie(name, score);
    },
  },
};

export default resolvers;
