import Calculator from "@/components/Calculator";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-screen w-screen gap-2">
      <h1 className="text-3xl font-semibold text-blue-950 mb-4 ">
        My Calculator
      </h1>
      <Calculator />
    </section>
  );
}
