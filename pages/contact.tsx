import Layout from "@/components/Layout/Layout";

export default function Contact() {
  return (
    <Layout>
      <section className="container mx-auto">
        <h1 className="mb-4 text-center text-2xl">Contact</h1>
        <p className="mb-14 text-center text-base text-neutral-500">
          Have a question? Get in Touch with us.
        </p>
        <div className="mb-6 grid grid-cols-5 gap-6"></div>
      </section>
    </Layout>
  );
}
