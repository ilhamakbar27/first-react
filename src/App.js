// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import download from "./download.jpeg";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Example from "./component/box";

const notify = () =>
  toast.success("Selamat pintu surga semakin dekat !", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

const notify1 = () =>
  toast.success("Selamat anda telah di jalan yang benar !", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

function App() {
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  const [zikir, setZikir] = useState("Subhanallah");
  // const [notification , setNotification] = useState({notify})
  return (
    <div className="App">
      <header className="App-header">
        <div className="bg-slate-800">
          <div className="mx-auto max-w-7xl py-30 px-4 sm:px-65 lg:flex lg:items-center lg:justify-between lg:py-3 lg:px-45">
            <h1 className="text-2xl font-bold tracking-tight dark:text-white sm:text-4xl">
              <span className="block">Anda mau bertobat?</span>
              <span className="block text-green-500">
                Silahkan mulai berzikir dari sekarang.
              </span>
            </h1>
            {/* <p>────────────────────</p> */}
            {/* <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8"></div> */}
            <p>
              ────────────────
              <span className="block text-gray-300">
                Rasulullah SAW bersabda, Tiada suatu kaum yang duduk sambil
                berdzikir kepada Allah melainkan mereka akan dikelilingi oleh
                malaikat, diselimuti oleh rahmat dan Allah akan mengingat mereka
                di hadapan makhluk yang ada di sisi-Nya. (HR. Bukhari)
              </span>
              ──────────────────
            </p>
            {/* <p>────────────────────</p> */}
            <div className="mt-5 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow"></div>
              <div className="ml-3 inline-flex rounded-md shadow">
                {/* <a
                href="app.js"
                className="inline-flex items-center justify-center align-center rounded-md border border-transparent bg-black px-5 py-3 text-base font-medium text-white-600 hover:bg-indigo-300"
              >
            Ikut Tobat
              </a> */}
              </div>
            </div>
          </div>
        </div>
        {/* <Example/> */}
        <img src={download} alt="Download" />
        <p className="text-xl font-bold tracking-tight dark:text-white sm:text-4xl">
          {" "}
          Total : {total}{" "}
        </p>
        <p>{zikir}</p>
        <p>{count}</p>

        <button
          onClick={() => {
            setCount(count + 1);
            setTotal(total + 1);
            if (count >= 33 && zikir === "Subhanallah") {
              setCount(0 + 1);
              setZikir("Alhamdulillah");
            } else if (count === 33 && zikir === "Alhamdulillah") {
              setZikir("AllahuAkbar");
              setCount(0 + 1);
            } else if (count === 33 && zikir === "AllahuAkbar") {
              setZikir("Subhanallah");
              setCount(0 + 1);
            }

            if (total === 99) {
              notify();
              // setTotal(0)
            }
            if (total === 50) {
              notify1();
            }
          }}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >
          Zikir Bro!
        </button>
        <p className="bg-slate-800">──────</p>
        <button
          onClick={() => {
            setCount(0);
            setTotal(0);
            setZikir("Subhanallah");
          }}
          className="bg-gray-700 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded "
        >
          Ulang Lagi
        </button>
        {/* <button onClick={notify}>
          Notify
        </button> */}
        <ToastContainer />
      </header>

      <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-slate-900">
        <span className="text-sm text-gray-300 sm:text-center dark:text-gray-400">
          © 2022 .FaoTech™ All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          {/* <li>
            <a href="App.js" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="App.js" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="App.js" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="App.js" class="hover:underline">Contact</a>
        </li> */}
        </ul>
      </footer>
    </div>
  );
}

export default App;
