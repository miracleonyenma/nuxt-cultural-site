import {
  artifactsQueryLiteral,
  loginQueryLiteral,
  peopleQueryLiteral,
  peoplesQueryLiteral,
  practicesQueryLiteral,
} from "~/utils/api";

export const useSendRequest = () => {
  const {
    public: { graphqlUrl, apiReadToken },
  } = useRuntimeConfig();

  return (payload: { query: string; variables: any }) => {
    console.log({
      graphqlUrl,
      apiReadToken,
      payload,
    });

    return fetch(graphqlUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiReadToken}`,
      },
      body: JSON.stringify(payload),
    });
  };
};

export const useAPI = () => {
  const sendRequest = useSendRequest();

  const fetchPeoples: ({
    page,
    pageSize,
    searchTerm,
  }: {
    page?: number | undefined;
    pageSize?: number | undefined;
    searchTerm?: string | undefined;
  }) => Promise<PeopleResponse> = async ({
    page = 1,
    pageSize = 10,
    searchTerm = "",
  }) => {
    const peoplesQuery = {
      query: peoplesQueryLiteral,
      variables: {
        page,
        pageSize,
        searchTerm,
      },
    };

    const res = await sendRequest(peoplesQuery);

    return await res.json();
  };

  const fetchPeople: ({
    slug,
  }: {
    slug: string;
  }) => Promise<PeopleResponse> = async ({ slug }) => {
    const peopleQuery = {
      query: peopleQueryLiteral,
      variables: {
        slug,
      },
    };

    const res = await sendRequest(peopleQuery);

    return await res.json();
  };

  const fetchPractices: ({
    slug,
  }: {
    slug: string;
  }) => Promise<PracticesResponse> = async ({ slug }) => {
    const practiceQuery = {
      query: practicesQueryLiteral,
      variables: {
        slug,
      },
    };

    const res = await sendRequest(practiceQuery);

    return await res.json();
  };

  const fetchArtifacts: ({
    slug,
  }: {
    slug: string;
  }) => Promise<ArtifactsResponse> = async ({ slug }) => {
    const artifactQuery = {
      query: artifactsQueryLiteral,
      variables: {
        slug,
      },
    };

    const res = await sendRequest(artifactQuery);

    return await res.json();
  };

  const registerUser: ({
    username,
    email,
    password,
  }: {
    username: string;
    email: string;
    password: string;
  }) => Promise<RegisterResponse> = async ({ username, email, password }) => {
    const registerQuery = {
      query: registerQueryLiteral,
      variables: {
        username,
        email,
        password,
      },
    };

    const res = await sendRequest(registerQuery);

    return await res.json();
  };

  const loginUser: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<LoginResponse> = async ({ email, password }) => {
    const loginQuery = {
      query: loginQueryLiteral,
      variables: {
        email,
        password,
      },
    };

    const res = await sendRequest(loginQuery);

    return await res.json();
  };

  return {
    fetchPeoples,
    fetchPeople,
    fetchPractices,
    fetchArtifacts,
    registerUser,
    loginUser,
  };
};
