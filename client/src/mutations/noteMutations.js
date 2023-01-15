import { gql } from "@apollo/client";

const ADD_NOTE = gql`
    mutation addNote($title: String!, $content: String!) {
        addNote(title: $title, content: $content) {
            id
            title
            content
        }
    }
`;

const DELETE_NOTE = gql`
    mutation deleteNote($id: ID!) {
        deleteNote(id: $id) {
            id
        }
    }
`;

const UPDATE_NOTE = gql`
    mutation updateNote(
        $id: ID!
        $title: String!
        $content: String!
    ) {
        updateNote(
            id: $id
            title: $title
            content: $content
        ) {
            id
            title
            content
        }
    }
`;

export { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE };