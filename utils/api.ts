export const mediaLiteral = `
data {
  id
  attributes {
    url
  }
}
`;

export const practicesLiteral = `
data {
  id
  attributes {
    slug
    name
    description
    cover {
      ${mediaLiteral}
    }
    category {
      data {
        id
        attributes {
          name
          slug
        }
      }
    }
  }
}`;

export const peoplesQueryLiteral = `query($page: Int, $pageSize: Int, $searchTerm: String) {
  peoples(pagination: { page: $page, pageSize: $pageSize }, filters: {
    name: {contains: $searchTerm}
  }) {
    data {
      id
      attributes {
        slug
        name
        description
        cover {
          ${mediaLiteral}
        }
      }
    }
  }
}`;

export const peopleQueryLiteral = `query($slug: String) {
  peoples(filters: { slug: { eq: $slug } }) {
    data {
      id
      attributes {
        name
        description
        cover {
          ${mediaLiteral}
        }
        practices {
          ${practicesLiteral}
        }
        artifacts {
          ${practicesLiteral}
        }
      }
    }
  }
}`;

export const practicesQueryLiteral = `query($slug: String) {
  practices(filters: { slug: { eq: $slug } }) {
    data {
      id
      attributes {
        slug
        name
        description
        body
        cover {
          data {
            id
            attributes {
              url
            }
          }
        }
        category {
          data {
            id
            attributes {
              name
              slug
            }
          }
        }
      }
    }
  }
}
`;

export const artifactsQueryLiteral = `query($slug: String) {
  artifacts(filters: { slug: { eq: $slug } }) {
    data {
      id
      attributes {
        slug
        name
        description
        body
        cover {
          data {
            id
            attributes {
              url
            }
          }
        }
        category {
          data {
            id
            attributes {
              name
              slug
            }
          }
        }
      }
    }
  }
}
`;

export const registerQueryLiteral = `mutation($userame: String!, $email: String!, $password: String!) {
  register(input: { username: $userame, email: $email, password: $password }) {
    jwt
    user {
      id
      username
      email
      confirmed
      role {
        id
        name
        description
        type
      }
    }
  }
}`;

export const loginQueryLiteral = `mutation($email: String!, $password: String!) {
  login(input: { identifier: $email, password: $password }) {
    jwt
    user {
      id
      username
      email
      confirmed
      blocked
      role {
        id
        name
        description
        type
      }
    }
  }
}
`;
