import Layout from "@/components/Layout/Layout";

export default function About() {
  return (
    <Layout>
      <section className="container mx-auto mt-6">
        <h1 className="mb-4 text-center text-2xl">About</h1>
        <p className="mb-14 text-center text-base text-neutral-500">
          Check out our story
        </p>
        <div className="mb-6 grid grid-cols-5 gap-6"></div>
      </section>
    </Layout>
  );
}
