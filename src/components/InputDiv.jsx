// eslint-disable-next-line react/prop-types
function InputDiv({ label, name, type, placeholder }) {
  return (
    <div className="text-xs sm:text-sm lg:text-base flex flex-col lg:flex-row gap-2 lg:items-center">
      <label htmlFor={name} className="lg:min-w-[200px]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="p-2 w-full rounded-md border border-[#e5e5e5]"
        autoComplete="off"
        required
      />
    </div>
  );
}

export default InputDiv;
