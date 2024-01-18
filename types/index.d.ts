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

// interface PeopleAttributes {
//   slug: string;
//   name: string;
//   description: string;
//   cover: {
//     data: CoverData;
//   };
// }

// interface PeopleData {
//   id: string;
//   attributes: PeopleAttributes;
// }

// interface PeoplesResponse {
//   peoples: {
//     data: PeopleData[];
//   };
// }

// interface PeoplesResponseData {
//   data: PeoplesResponse;
// }

interface PracticeAttributes {
  slug: string;
  name: string;
  description: string;
  cover: {
    data: CoverData;
  };
  category: {
    data: {
      id: string;
      attributes: {
        name: string;
        slug: string;
      };
    };
  };
}

interface PracticeData {
  id: string;
  attributes: PracticeAttributes;
}

interface ArtifactsData {
  id: string;
  attributes: PracticeAttributes;
}

interface PeopleAttributes {
  slug: string;
  name: string;
  description: string;
  cover: {
    data: CoverData;
  };
  practices?: {
    data: PracticeData[];
  };
  artifacts?: {
    data: ArtifactsData[];
  };
}

interface PeopleData {
  id: string;
  attributes: PeopleAttributes;
}

interface PeopleResponse {
  data: {
    peoples: {
      data: PeopleData[];
    };
  };
}
