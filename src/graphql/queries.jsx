import gql from "graphql-tag";

export const GET_RECIPES = gql`
  query getRecipes(
    $fingerprint: String
    $keywords: [String!]!
    $dependencies: [String!]!
    $parameters: String
    $language: LanguageEnumeration!
    $filename: String
  ) {
    getRecipesForClient(
      fingerprint: $fingerprint
      keywords: $keywords
      dependencies: $dependencies
      parameters: $parameters
      language: $language
      filename: $filename
    ) {
      id
      name
      description
      isPublic
      keywords
      tags
      code
      imports
    }
  }
`;
