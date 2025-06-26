import Profile from "./components/Profile";
import Project from "./components/Project";

const App = () => {
  return (
    <div className="flex flex-col gap-[30px] py-[20px]">
      <Profile />
      <Project />
    </div>
  );
};

export default App;
