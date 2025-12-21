const Button = ({ name }) => {
  return (
    <button className="px-3 md:px-4 py-1.5 bg-gray-100 hover:bg-gray-200 text-xs md:text-sm rounded-full mr-2 mb-2 whitespace-nowrap">
      {name}
    </button>
  );
};

export default Button;
