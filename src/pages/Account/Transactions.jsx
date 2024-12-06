import ContinueButton from "../../components/ContinueButton";
import Table from "../../components/Table";

const head = [
  { name: "Date Added" },
  { name: "Description" },
  { name: "Amount (USD)" },
];

function Transactions() {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-medium text-[#444]">
        Your Transactions
      </h1>
      <p className="mt-2 sm:mt-4 text-xs sm:text-sm">
        Your current balance is: $0.00.
      </p>
      <div className="my-4">
        <Table data={head} />
        <p className="p-2 text-xs text-center border-x border-b cursor-default hover:bg-slate-300">
          You do not have any transactions!
        </p>
      </div>
      <p className="text-xs mb-4 text-right">Showing 0 to 0 of 0 (0 Pages)</p>
      <div className="mt-4 pt-2 flex justify-end ">
        <ContinueButton />
      </div>
    </div>
  );
}

export default Transactions;
