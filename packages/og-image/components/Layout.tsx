export default function Layout({
  firstName,
  lastName,
  avatar,
  github,
  title,
  url
}) {
  function getFontSize(length) {
    if (length > 32) {
      return `text-7xl`
    }

    return `text-9xl`
  }

  return (
    <div className="relative flex flex-col justify-between p-16 w-[1200px] h-[630px] font-black">
      <div className="max-w-screen-lg">
        <h1 className={getFontSize(title.length)}>{title}</h1>
      </div>
      <div className="flex items-center space-x-6">
        <img
          src={avatar}
          alt={firstName + ' ' + lastName}
          className="flex-none w-32 h-32 border-4 rounded-full border-neutral-200"
        />
        <div>
          <p className="mb-1 text-3xl ">
            {firstName}
            <span className="text-primary-500">{lastName}</span>
          </p>
          <p className="text-2xl">{url}</p>
          <p className="text-2xl text-secondary-400">{github}</p>
        </div>
      </div>
    </div>
  )
}
