import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
  query getProjects {
    Projects {
      id
      name
      status
    }
  }
`;

const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(id: $id) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

export { GET_PROJECT, GET_PROJECTS };
