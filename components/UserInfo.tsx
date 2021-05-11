export type UserProps = {
  name: string;
};

const UserInfo: React.FC<{ user: UserProps }> = ({ user }) => {
  const { name } = user;

  return (
    <div>
      <div>{name}</div>
    </div>
  );
};

export default UserInfo;
