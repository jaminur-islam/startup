import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button
        variant="faded"
        color="secondary"
        className="text-[16px] font-medium"
      >
        Start now
      </Button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit delectus
        laudantium recusandae placeat atque laborum laboriosam voluptatum autem.
        Mollitia, natus.
      </p>
    </main>
  );
}
