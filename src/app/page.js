import { SheetDemo } from "@/components/common/SheetDemo";
import { SignupDemo } from "@/components/common/SignupDemo";
import { Button } from "@/components/ui/button";
import { Divide } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <h1 className="text-red-500">Hello </h1>
    <Button variant="link" className="">Add</Button>
    <SignupDemo />
    <SheetDemo />
    </>
  );
}
