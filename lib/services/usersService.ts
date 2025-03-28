import { typedApiClient } from '../apiClientServer';

export const getUserByExternalId = async (id: string) => {
  try {
    const response = await typedApiClient.GET('/users/external/{id}', {
      params: {
        path: { id },
      },
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

export const getUserById = async (id: string, organizationId: string) => {
  try {
    const response = await typedApiClient.GET(
      '/users/{id}/organization/{organizationId}',
      {
        params: {
          path: { id, organizationId },
        },
      }
    );
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
    const response = await typedApiClient.GET('/users/organizations');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getOrganizationMembers = async (organizationId: string) => {
  try {
    const response = await typedApiClient.GET('/organizations/{id}/members', {
      params: {
        path: { id: organizationId },
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const approveMember = async (
  organizationId: string,
  memberId: string
) => {
  try {
    const response = await typedApiClient.POST(
      '/organizations/{organizationId}/members/{memberId}/approve',
      {
        params: {
          path: { organizationId, memberId },
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
