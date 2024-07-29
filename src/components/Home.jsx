import Header from "./Header";

function Home() {
  return (
    <div className="h-screen">
      <Header />
      <main className="p-4 h-full dark:bg-black">
        <section className="p-4 mx-auto max-w-screen-xl">
          <h2 className="text-4xl font-medium dark:text-white">Home</h2>
        </section>
      </main>
    </div>
  );
}

export default Home;
