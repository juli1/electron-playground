import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/client";
import "./App.css";
import { SearchForm } from "./components/RecipeSearch";
import client from "./graphql/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <div className="App">
          <SearchForm />
        </div>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
}

export default App;
