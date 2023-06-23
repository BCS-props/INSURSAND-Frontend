const Proposals = ({ subject, status }) => {
  const getStatus = () => {
    if (status === 0) {
      status = "in Progress";
    } else if (status === 1) {
      status = "passed";
    } else if (status === 2) {
      status = "rejected";
    }
  };
  getStatus();
  return (
    <div className="px-12">
      <div className="bg-amber-600/80 rounded-xl hover:bg-amber-600/40 duration-200">
        <div className="p-4">
          <div className="flex justify-between">
            <div className="">{subject}</div>
            <div>{status}</div>
          </div>
          <div className="text-xs mt-2 opacity-50">
            {/* votes: {Number(v.accept)} + {Number(v.deny)} */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Proposals;
