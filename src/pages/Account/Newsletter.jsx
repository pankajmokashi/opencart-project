import BackButton from "../../components/BackButton";
import ContinueButton from "../../components/ContinueButton";
import Switch from "../../components/Switch";

function Newsletter() {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-medium text-[#444]">
        Newsletter Subscription
      </h1>
      <div className="ml-8 mt-2">
        <Switch label="Subscribe" name="subscribe" />
      </div>

      <div className="mt-4 pt-2 flex justify-between ">
        <BackButton />
        <ContinueButton />
      </div>
    </div>
  );
}

export default Newsletter;
