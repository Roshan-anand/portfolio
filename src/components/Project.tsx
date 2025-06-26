import CodeJoin from "./projects/codejoin";
import Gopod from "./projects/gopod";

const Project = () => {
  return (
    <main className="relative container border-2 border-border-one rounded-tr-2xl rounded-bl-2xl [&>*]:border-b-2 [&>main]:border-border-one [&>*]:p-2">
      <Gopod />
      <CodeJoin />
      <p className="absolute top-0 right-0 text-accent-y font-bold border-b-2 border-l-2 border-accent-y ">
        PERSONAL PROJECTS
      </p>
    </main>
  );
};

export default Project;
