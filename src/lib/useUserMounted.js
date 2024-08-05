import { useUserStore } from "@/stores/useUserStore";
import { useEffect, useState } from "react";

function UseUserMounted() {
  const { user } = useUserStore();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(!!user);
  }, [user]);

  return hasMounted;
}

export default UseUserMounted;
