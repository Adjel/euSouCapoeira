import React from "react";

function LoginModal() {
  const { isOpen } = useLoginModalStore();

  return (
    isOpen && (
      <aside className="absolute top-0 right-0 w-46 h-full bg-white"></aside>
    )
  );
}

export default LoginModal;
