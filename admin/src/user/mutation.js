import gql from 'graphql-tag';

export const BAN_USER = gql`
  mutation BanUser($id: Int, $reason: String) {
    userBan(id: $id, reason: $reason) {
      id
    }
  }
`;

export const UNBAN_USER = gql`
  mutation UnBanUser($id: Int) {
    userUnban(id: $id) {
      id
    }
  }
`;
