import { gql } from "@apollo/client";

const GET_NOTES = gql`
  query {
    notes {
      id
      writer
      title
      content
    }
  }
`;

const GET_NOTE = gql`
  query getNote($id: ID!) {
    note(id: $id) {
      id
      writer
      title
      content
    }
  }
`;

export { GET_NOTES, GET_NOTE };
