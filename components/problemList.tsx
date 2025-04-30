import { problems } from "@/constants/Problems";
import { ProblemContext } from "@/context/problemContext";
import { getDifficultyColor, getTagColor } from "@/lib/util";
import { ChevronRight } from "lucide-react";
import { useContext } from "react";

type ProblemListProps={
    setOpen:(open:boolean)=>void;
}



const ProblemList=({setOpen}:ProblemListProps)=>{

      const context = useContext(ProblemContext);
      if (!context) {
        throw new Error("Sidebar must be used within a ProblemContextProvider");
      }

      const { setProblem } = context;

      const handleProblemChange = (index: number) => {
        setProblem({
          runCode: false,
          problemNo: index,
        });
        setOpen(false);
      };


    return (
      <div className="flex font-inter h-full flex-col overflow-y-scroll bg-white shadow-xl">
        <div className="relative flex-1">
          <div className="">
            {problems?.map((item, index) => (
              <div
                onClick={() => handleProblemChange(index)}
                key={index}
                className="hover:bg-neutral-50 border-t py-2 px-6  border-neutral-300 bg-white  transition-all duration-200 cursor-pointer hover:border-blue-200 group"
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-3">
                    <div>
                      <p className="text-md text-neutral-700  transition-colors duration-200">
                        {item.title}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span
                          className={`text-xs rounded-xl h-[20px] px-3 flex items-center ${getDifficultyColor(
                            item.difficulty
                          )}`}
                        >
                          {item.difficulty}
                        </span>

                        {item.tags?.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`text-xs items-center flex h-[20px] px-3 rounded-full font-medium ${getTagColor(
                              tagIndex
                            )}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-neutral-700 transition-colors duration-200 mt-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default ProblemList