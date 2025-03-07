import { typedApiClient } from "../apiClientServer";

export const getUser = async (id: string) => {
  try {
    const response = await typedApiClient.GET("/users/{id}", {
      params: {
        path: { id }
      }
    });
    if (!response.data) {
      throw new Error(`User with id ${id} not found`);
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getUserOrganizations = async () => {
  try {
    const response = await typedApiClient.GET("/users/organizations");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getOrganizationMembers = async (organizationId: string) => {
  try {
    const response = await typedApiClient.GET("/organizations/{id}/members", {
      params: {
        path: { id: organizationId }
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
