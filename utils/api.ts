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
          data {
            id
            attributes {
              url
            }
          }
        }
      }
    }
  }
}`;
