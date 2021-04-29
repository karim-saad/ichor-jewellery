export type UserProps = {
  firstname: string;
  lastname: string;
};

const UserInfo: React.FC<{ user: UserProps }> = ({ user }) => {
  const { firstname, lastname } = user;

  return (
    <div>
      <div>{firstname}</div>
      <div>{lastname}</div>
    </div>
  );
};

export default UserInfo;
