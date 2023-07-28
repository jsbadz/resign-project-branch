import Link from "next/link";
import { Button } from "../component";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="lg:flex mb-32 text-center md:flex-none lg:mb-0 lg:text-left">
        <Button type={"link"} href={"/"} label="Name" />
      </div>
    </main>
  );
}
