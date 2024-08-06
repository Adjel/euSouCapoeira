import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Page() {
  return (
    <div className="p-7 h-72 flex flex-col justify-center items-center gap-6">
      <h2 className="flex text-3xl md:text-4xl">Merci pour votre achat !</h2>
      <Button>
        <Link href={"/dashboard/mes_commandes"}>
          {`Retouvrez le résumé de votre commande ici ->`}
        </Link>
      </Button>
    </div>
  );
}

export default Page;
