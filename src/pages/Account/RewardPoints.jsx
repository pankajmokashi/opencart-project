import ContinueButton from "../../components/ContinueButton";
import Table from "../../components/Table";

const head = [
  { name: "Date Added" },
  { name: "Description" },
  { name: "Points" },
];

function RewardPoints() {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-medium text-[#444]">
        Your Reward Points
      </h1>
      <p className="mt-2 sm:mt-4 text-xs sm:text-sm">
        Your total number of reward points is: 0.
      </p>
      <div className="my-4">
        <Table data={head} />
        <p className="p-2 text-xs text-center border-x border-b cursor-default hover:bg-slate-300">
          You do not have any reward points!
        </p>
      </div>
      <div className="mt-4 pt-2 flex justify-end ">
        <ContinueButton />
      </div>
    </div>
  );
}

export default RewardPoints;
