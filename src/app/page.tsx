"use client";

import servers from "../../public/servers.json";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const handleSubmit = async (formData: FormData) => {
    const realm = formData.get("realm");
    const character = formData.get("character");

    if (!realm || !character) return;
    router.push(`/${realm}/${character}`);
  };

  return (
    <div className="flex flex-col items-center min-h-screen justify-center -mt-4 space-y-4">
      <h1 className="text-6xl font-bold">DOTI Farmer</h1>
      <h2 className="text-xl text-gray-300">
        Find out what you can get from{" "}
        <a
          className="text-green-200"
          href="https://www.wowhead.com/item=208216/reins-of-the-quantum-courser"
          target="_blank"
        >
          Reins of the Quantum Courser
        </a>
      </h2>

      <form
        className="flex flex-col w-5/6 lg:w-1/3 xl:w-1/4 space-y-4"
        action={handleSubmit}
      >
        <label className="flex flex-col">
          Realm
          <select
            className="bg-black p-1 rounded-lg border-2 border-white"
            id="realm"
            name="realm"
          >
            {servers.na.map((realm) => (
              <option key={realm.slug} value={realm.slug}>
                {realm.name}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col">
          Character
          <input
            id="character"
            name="character"
            type="text"
            className="bg-black p-1 rounded-lg border-2 border-white"
          />
        </label>
        <button type="submit" className="p-1 border-white border-2 rounded-lg">
          Lookup
        </button>
      </form>
    </div>
  );
};

export default Home;
