import useUserStore from "../store/useUserStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useState } from "react";

export function AddUser() {
  const queryClient = useQueryClient();
  const [name, setName] = useState("");

  const mutation = useMutation(addUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ name });
  };
}

export function UserProvider() {
  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  };

  const addUser = async (newUser) => {
    const docRef = await addDoc(collection(db, "users"), newUser);
    return { id: docRef.id, ...newUser };
  };

  const { data, error, isLoading } = useQuery(["users"], fetchUsers);

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
