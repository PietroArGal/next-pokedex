import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query GetPokemons {
    pokemons(limit: 25, offset: 0) {
      results {
        id
        name
        image
      }
    }
  }
`;
