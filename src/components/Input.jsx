export default function Input({ label, invalid, ...props }) {
  let labelStyles = "block mb-2 text-xs font-bold tracking-wide uppercase";
  let inputStyles = "w-full px-3 py-2 leading-tight border rounded shadow";
  if (invalid) {
    labelStyles += " text-red-400";
    inputStyles += " text-red-500 bg-red-100 border-red-300";
  } else {
    labelStyles += " text-stone-300";
    inputStyles += " text-gray-700 bg-stone-300";
  }
  return (
    <p>
      <label className={labelStyles}>{label}</label>
      <input className={inputStyles} {...props} />
    </p>
  );
}
