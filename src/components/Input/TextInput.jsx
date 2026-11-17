const TextInput = ({
  id,
  name,
  type = "text",
  autoComplete,
  isDarkMode,
  value,
  handleInputChange,
  textarea = false,
  label,
}) => {
  const fieldProps = {
    id,
    name,
    value,
    required: true,
    onChange: ({ target }) => handleInputChange(target.value),
    className: `w-full rounded-xl border px-4 pt-6 pb-2 transition-all duration-300 outline-none resize-none ${
      isDarkMode
        ? "bg-gray-800/50 border-gray-700 text-white focus:border-blue-500 focus:bg-gray-800/70"
        : "bg-white/80 border-gray-300 text-gray-900 focus:border-blue-500 focus:bg-white"
    }`,
  }

  return (
    <div className="relative">
      {textarea ? (
        <textarea {...fieldProps} rows={5} />
      ) : (
        <input
          {...fieldProps}
          type={type}
          autoComplete={autoComplete}
        />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2 text-sm"
      >
        {label}
      </label>
    </div>
  )
}

export default TextInput
