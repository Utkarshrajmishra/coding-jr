import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { RuntimeChart } from "./statusChart";
import ProblemSwitch from "./problemSwitch";

const SubmissionStatus = () => {
  return (

      <div className="font-inter bg-white border-r border-neutral-300 w-full lg:w-[450px] h-full overflow-y-auto">
        <div className="flex justify-between items-center p-3 sm:p-4 px-4 sm:px-6">
          <div className="text-green-600 font-medium text-lg sm:text-xl">
            Accepted
          </div>
          <div className="text-gray-500 text-xs sm:text-sm">
            A few seconds ago
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-b border-neutral-200">
          <div className="p-3 sm:p-4 border-r border-neutral-200 border-b sm:border-b-0">
            <div className="text-xs sm:text-sm text-gray-500 mb-1">
              Test cases
            </div>
            <div className="font-medium text-neutral-600 text-sm sm:text-base">
              6/6
            </div>
          </div>

          <div className="p-3 sm:p-4 border-b sm:border-b-0 sm:border-r border-neutral-200">
            <div className="text-xs sm:text-sm text-gray-500 mb-1">Time</div>
            <div className="flex items-center text-sm sm:text-base">
              <span className="font-medium text-neutral-600">1ms</span>
            </div>
          </div>

          <div className="p-3 sm:p-4 border-r border-neutral-200">
            <div className="text-xs sm:text-sm text-gray-500 mb-1">
              Language
            </div>
            <div className="font-medium text-sm sm:text-base text-neutral-600">
              Java
            </div>
          </div>

          <div className="p-3 sm:p-4">
            <div className="text-xs sm:text-sm text-gray-500 flex items-center mb-1">
              Memory
            </div>
            <div className="font-medium text-sm sm:text-base text-neutral-600">
              30Kb
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <div className="font-medium text-neutral-700 text-xs sm:text-sm mb-3 sm:mb-4">
            Runtime graph
          </div>
          <div className="h-1 bg-gray-200 rounded-full mb-4 sm:mb-6">
            <div className="h-1 bg-[#78c3e9] rounded-full w-[90%]"></div>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
            <div className="text-xs sm:text-sm text-gray-600">
              You are better than <span className="font-medium">90%</span>
            </div>
            <div className="text-xs sm:text-sm text-gray-600">
              Runtime <span className="font-medium">0 ms</span>
            </div>
          </div>
        </div>

        <RuntimeChart currentRuntime={371} percentileBetter={44.04} />

        <div className="p-3 sm:p-4 px-4 sm:px-6 border-t border-neutral-200 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
          <div className="text-xs sm:text-sm text-gray-500">
            Did you find these test cases useful?
          </div>
          <div className="flex gap-3">
            <button className="bg-gray-100 hover:bg-gray-200 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center transition-colors">
              <FaThumbsUp className="text-gray-500 h-3 w-3 sm:h-4 sm:w-4" />
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center transition-colors">
              <FaThumbsDown className="text-gray-500 h-3 w-3 sm:h-4 sm:w-4" />
            </button>
          </div>
        </div>
      </div>
  );
};

export default SubmissionStatus;
