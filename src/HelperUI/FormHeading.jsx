function FormHeading({children, subtitle}) {
  return (
    <div className="flex gap-1 flex-col items-start mb-4">
      <p className="text-2xl font-bold text-gray-900">{children}</p>
      <p className="text-sm  text-gray-600">{subtitle}</p>
    </div>
  )
}

export default FormHeading
