interface User {
  name: string;
  email: string;
  password: string;
}

// peoples
interface CoverData {
  id: string;
  attributes: {
    url: string;
  };
}

interface PeopleAttributes {
  slug: string;
  name: string;
  description: string;
  cover: {
    data: CoverData;
  };
}

interface PeopleData {
  id: string;
  attributes: PeopleAttributes;
}

interface PeopleResponse {
  peoples: {
    data: PeopleData[];
  };
}

interface PeopleResponseData {
  data: PeopleResponse;
}
