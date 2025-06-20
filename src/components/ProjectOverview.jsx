const ProjectOverview = () => {
  return (
    <div className=" flex border border-gray-300 rounded-lg p-4 shadow-sm  bg-gray-100 m-4 h-[13%] ">
      <div className="flex w-full px-2 items-center justify-between">
        {/* Project Info Section */}
        <div className="flex items-center space-x-10">
          {/* Name */}
          <div className="min-w-0">
            <div className="text-xs text-gray-500 uppercase  mb-1">NAME</div>
            <div className="text-sm font-medium text-gray-900">
              Website Design
            </div>
          </div>

          {/* Budget */}
          <div className="min-w-0">
            <div className="text-xs text-gray-500 uppercase  mb-1">BUDGET</div>
            <div className="text-sm font-medium text-gray-900">$45,000</div>
          </div>

          {/* Status */}
          <div className="min-w-0">
            <div className="text-xs text-gray-500 uppercase mb-1">STATUS</div>
            <div className="text-sm font-medium text-gray-900">In progress</div>
          </div>

          {/* Team */}
          <div className="min-w-0">
            <div className="text-xs text-gray-500 uppercase  mb-1 mt-1">
              TEAM ON PROJECT
            </div>
            <div className="flex  -space-x-2">
              <img
                className="size-7 rounded-full border-2 border-white"
                src="/member.png"
                alt="Team member 1"
              />
              <img
                className="size-7 rounded-full border-2 border-white"
                src="/member.png"
                alt="Team member 2"
              />
              <img
                className="size-7 rounded-full border-2 border-white"
                src="/member.png"
                alt="Team member 3"
              />
              <img
                className="size-7 rounded-full border-2 border-white"
                src="/member.png"
                alt="Team member 4"
              />
            </div>
          </div>

          {/* Completion Rate */}
          <div className="min-w-0">
            <div className="text-xs uppercase mb-1">Completion Rate</div>
            <div className="flex w-47 items-center">
              <div className="flex-1 bg-gray-200 rounded-lg h-6">
                <div
                  className="flex items-center bg-teal-600 h-6 rounded-lg"
                  style={{ width: "40%" }}
                >
                  <span className="ml-2 text-xs text-white">40%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div>
          <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-3 py-2 rounded-md text-sm font-medium ">
            <img
              src="/icons/share.svg"
              alt="Back"
              className="size-3 flex items-center justify-center"
            />
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
