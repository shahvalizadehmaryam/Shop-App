import { useUser } from "../../provider/userProvider";

const User = () => {
  const { userData } = useUser();
  return (
    <div style={{ color: "white" }}>
      <span> welcome {userData.userName}</span>
    </div>
  );
};

export default User;
