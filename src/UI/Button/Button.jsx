const Button = ({ text, className }) => {
  return (
    <>
      <button className={`jakarta relative bg-black text-white text-[18px] font-medium leading-[18px] py-[20px] group px-[30px] duration-300 ${className}`}>
        {text}
        <p className={`linearbtn jakarta group-hover:duration-300  -z-10 group-hover:z-10 whitespace-nowrap absolute left-[10px] top-[10px] text-white text-[18px] font-medium leading-[18px] py-[20px] px-[30px]  bg-blue-500 ${className}`}>
          {text}
        </p>
      </button>
    </>
  );
};

export default Button;
