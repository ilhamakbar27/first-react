export default function Example() {
    return (
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight dark:text-black sm:text-4xl">
            <span className="block">Anda mau bertobat?</span>
            <span className="block text-gray-400">Silahkan mulai berzikir dari sekarang.</span>
          </h1>
          {/* <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8"></div> */}
          <p>
          <span className="block text-gray-800">Rasulullah SAW bersabda, Tiada suatu kaum yang duduk sambil berdzikir kepada Allah melainkan mereka akan dikelilingi oleh malaikat, diselimuti oleh rahmat dan Allah akan mengingat mereka di hadapan makhluk yang ada di sisi-Nya. (HR. Bukhari)</span>
          </p>
          <div className="mt-5 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="app.js"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-black px-5 py-3 text-base font-medium text-white-600 hover:bg-indigo-50"
              >
            Ikut Tobat
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  