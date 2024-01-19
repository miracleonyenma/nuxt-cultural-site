const useUser = () => {
  return useState<User | null>("user", () => null);
};

const setUser = (userData: User | null) => {
  const user = useUser();
  return useState("set-user", () => {
    user.value = userData;
  });
};
