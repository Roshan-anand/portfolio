import Nav from "./components/Nav";
import Profile from "./components/Profile";

const App = () => {
  return (
    <>
      <main className="w-[80%] mb:w-[98%] mx-auto max-w-[1140px] h-screen flex flex-col mb:flex-row py-3">
        <section className="min-w-[40%] max-h-screen sticky flex flex-col gap-[5rem] mb:gap-2 justify-center items-center">
          <Nav />
          <Profile />
        </section>
        <section className="border-2 grow"></section>
      </main>
    </>
  );
};

export default App;
