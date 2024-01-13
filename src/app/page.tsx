const Home = () => {
  return (
    <div className="bg-black">
      <form className="flex flex-col">
        <label>
          Realm
          <select>
            <option>deez</option>
            <option>nuts</option>
          </select>
        </label>
        <label>
          Character
          <input type="text" />
        </label>
      </form>
    </div>
  );
};

export default Home;
