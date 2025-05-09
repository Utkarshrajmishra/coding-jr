"use client"

type ProblemSwitch={
setSubmit:(val:boolean)=>void;
}

const ProblemSwitch = ({setSubmit}: ProblemSwitch) => {
  return (
    <section className="h-screen text-zinc-700 text-sm flex flex-col bg-neutral-100 border-r justify-center py-4 border-neutral-300 w-8">
      <div className="flex flex-col items-center h-screen justify-evenly">
        <button
          onClick={() => setSubmit(false)}
          className="rotate-90 cursor-pointer whitespace-nowrap px-2 py-1 rounded "
        >
          <p>Problem Statement</p>
        </button>
        <div className="h-[1px] w-full bg-zinc-300"></div>
        <button
          onClick={() => setSubmit(true)}
          className={`rotate-90 whitespace-nowrap px-2 py-1 cursor-pointer rounded `}
        >
          <p>Submission</p>
        </button>
      </div>
    </section>
  );
};

export default ProblemSwitch;
