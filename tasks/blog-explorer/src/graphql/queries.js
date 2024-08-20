import { gql } from '@apollo/client';

export const GET_COMMENTS = gql`
  query GetComments($postId: ID!) {
    post(id: $postId) {
      comments {
        data {
          id
          name
          email
          body
        }
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation AddComment($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
      name
      email
      body
    }
  }
`;