import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://graphql.datocms.com/", // Replace with your GraphQL endpoint
  headers: {
  
    Accept: "application/json",
    Authorization: "Bearer eb1c586a7acb07afbfeb125504b335",
  },
});

export const graphqlRequest = async (
  query: string,
  variables?: Record<string, any>
) => {
  try {
    const response = await apiClient.post("", {
      query,
      variables,
    });
    return response.data;
  } catch (error) {
    throw new Error(`GraphQL request failed: ${error}`);
  }
};

export default apiClient;
