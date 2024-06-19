import useUserStore from "../store/useUserStore";

export function UserProvider() {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const clearUser = useUserStore((state) => state.clearUser);

  const login = () => {
    setUser({ name: "John Doe", email: "john.doe@example.com" });
  };

  const logout = () => {
    clearUser();
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      {user ? (
        <div>
          <p className="text-lg font-semibold">Welcome, {user.name}</p>
          <button
            onClick={logout}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={login}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Login
        </button>
      )}
    </div>
  );
}

export default UserProvider;
