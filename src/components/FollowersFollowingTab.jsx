const FollowersFollowingTab = ({ children }) => {
  return (
    <div>
      <div className="flex flex-row h-36 rounded-lg justify-center items-center text-center bg-neutrals-800 font-bold">
        <div className="stats bg-neutrals-800">
          <div className="stat px-2 place-items-center">
            <div className="stat-figure"></div>
            <div className="stat-value text-xl">100K</div>
            <div className="stat-desc">FOLLOWING</div>
          </div>

          <div className="stat px-2 place-items-center border-transparent">
            <div className="stat-figure"></div>
            <div className="stat-value text-xl">100K</div>
            <div className="stat-desc">FOLLOWERS</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FollowersFollowingTab;