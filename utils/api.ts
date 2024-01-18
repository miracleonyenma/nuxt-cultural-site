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
