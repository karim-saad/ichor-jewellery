import { GetServerSideProps } from 'next';
import UserInfo, { UserProps } from '../../components/UserInfo';
import prisma from '../../lib/prisma';

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await prisma.user.findMany({
    select: {
      name: true
    }
  });
  return {
    props: { users }
  };
};

type Props = {
  users: UserProps[];
};

const UsersPage: React.FC<Props> = (props) => {
  const { users } = props;
  return (
    <div>
      {users.map((user) => (
        <UserInfo user={user} />
      ))}
    </div>
  );
};

export default UsersPage;
