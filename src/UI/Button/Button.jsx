const Button = ({ text, className, className2 }) => {
  return (
    <>
      <button
        className={`linearbtn jakarta relative  text-[18px] font-medium leading-[18px] py-[20px] group px-[30px] duration-300  ${className2}`}
      >
        {text}
        <p
          className={` jakarta absolute group-hover:duration-300 group-hover:z-10 whitespace-nowrap left-[-10px] top-[-10px] text-[18px] font-medium leading-[18px] py-[20px] px-[30px]  bg-black ${className}`}
        >
          {text}
        </p>
      </button>
    </>
  );
};

export default Button;
