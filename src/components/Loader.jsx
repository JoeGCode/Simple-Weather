const Loader = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-16 w-16 animate-[spin_1s_linear_infinite]">
        <div className="h-full w-full rounded-[50%] border-4 border-t-2 border-purple-950 border-t-transparent"></div>
      </div>
    </div>
  );
};

export default Loader;
