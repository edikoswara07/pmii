import heros from "../data/heros";
import Container from "./Container";

export default function Hero() {
  return (
    <div>
      <Container bg="bg-gradient-to-b from-gray-300 to-indigo-300" name="Hallo">
        <div className="flex flex-col items-start justify-between py-6 sm:flex-row sm:items-center space-y-14 sm:space-y-2 sm:space-x-4">
          <div className="w-full sm:max-w-lg">
            <h1 className="text-lg font-bold text-gray-900 sm:text-4xl">
              <span>
                Pergerakan Mahasiswa
                <br className="hidden sm:block" /> Islam Indoneisa.
              </span>
            </h1>
            <p className="mt-3 text-xs font-light leading-relaxed text-gray-600 break-words">
              Pergerakan Mahasiswa Islam Indonesia (PMII) lahir karena menjadi
              <br />
              suatu kebutuhan dalam menjawab tantangan zaman.
              <br />
            </p>
            <div className="flex flex-col items-start mt-10 sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <div className="w-full sm:w-auto">
                <button className="w-full px-6 py-2 bg-indigo-900 text-indigo-100 font-semibold text-base rounded-lg shadow-lg hover:bg-indigo-500">
                  Join PMII
                </button>
              </div>
              <div className="w-full sm:w-auto">
                <button className="w-full px-6 py-2 bg-gray-300 text-indigo-900 font-semibold text-base rounded-lg shadow-lg hover:bg-indigo-500 hover:text-indigo-100">
                  Explore PMII
                </button>
              </div>
            </div>
          </div>

          <div className="self-center py-5 sm:self-center">
            <div className="relative self-center h-64 sm:h-96 sm:self-center">
              <div className="absolute inset-0 w-full h-full shadow-2xl transform rotate-6 rounded-3xl bg-gradient-to-tr from-blue-500 to-indigo-500"></div>
              <img
                src={heros.image}
                alt={heros.alt}
                className="relative inset-0 object-cover w-full h-full rounded-3xl"
              />
              <div className="absolute inset-0 w-full h-full bg-black shadow-2xl transform rounded-3xl bg-opacity-50"></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
