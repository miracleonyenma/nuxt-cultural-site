import { peoplesQueryLiteral } from "~/utils/api";

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

export const usePeople = () => {
  const sendRequest = useSendRequest();

  const fetchPeoples: ({
    page,
    pageSize,
    searchTerm,
  }: {
    page?: number | undefined;
    pageSize?: number | undefined;
    searchTerm?: string | undefined;
  }) => Promise<PeopleResponseData> = async ({
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

  return {
    fetchPeoples,
  };
};
