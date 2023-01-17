import PageLayout from "@/components/PageLayout";
import Link from "next/link";

export default function About() {
  return (
    <PageLayout title="About">
      <h1 className="text-center text-[30px] text-white">Esto es el About</h1>
      <Link href="/" className="text-white">
        Ir al home
      </Link>
    </PageLayout>
  );
}
