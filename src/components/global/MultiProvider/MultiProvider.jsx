import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { store } from "../../../store";
import { CustomThemeProvider } from "../CustomThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 60 * 1000, // 1 hour in milliseconds
    },
  },
});

function MultiProvider({ children }) {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <CustomThemeProvider>{children}</CustomThemeProvider>
        </QueryClientProvider>
      </Provider>
    </>
  );
}

MultiProvider.propTypes = {
  children: PropTypes.node,
};

export default MultiProvider;
