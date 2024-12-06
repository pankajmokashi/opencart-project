import BackButton from "../../components/BackButton";
import ContinueButton from "../../components/ContinueButton";
import InputDiv from "../../components/InputDiv";

function GiftCertificates() {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-medium text-[#444]">
        Purchase a Gift Certificate
      </h1>
      <p className="text-xs mt-4">
        This gift certificate will be emailed to the recipient after your order
        has been paid for.
      </p>
      <div className="mt-4 text-[#666]">
        <form className="sm:px-4 mt-4 flex flex-col gap-4">
          <InputDiv
            label="Recipient's Name"
            name="resp-name"
            type="text"
            placeholder="Recipient's Name"
          />
          <InputDiv
            label="Recipient's e-mail"
            name="email"
            type="email"
            placeholder="Recipient's e-mail"
          />
          <InputDiv label="Your Name" name="name" type="text" placeholder="" />
          <InputDiv
            label="Your e-mail"
            name="email"
            type="email"
            placeholder=""
          />
          <div className="text-xs sm:text-sm lg:text-base flex flex-col lg:flex-row gap-2 lg:items-center">
            <label htmlFor="message" className="lg:min-w-[200px]">
              Message
            </label>
            <textarea
              rows={5}
              name="message"
              id="message"
              placeholder="Message"
              className="p-2 w-full rounded-md border border-[#e5e5e5]"
              autoComplete="off"
            />
          </div>
          <InputDiv label="Amount" name="amount" type="text" placeholder="1" />
          <div className="pt-2 flex justify-between ">
            <BackButton />
            <ContinueButton />
          </div>
        </form>
      </div>
    </div>
  );
}

export default GiftCertificates;
