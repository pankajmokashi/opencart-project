/* eslint-disable react/prop-types */

function Table({ data }) {
  return (
    <table className="w-full border border-collapse">
      <thead>
        <tr>
          {data.map((head) => (
            <th
              key={head.name}
              className="px-2 py-2 text-xs md:text-sm text-left border-r-2"
            >
              {head.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
}

export default Table;
