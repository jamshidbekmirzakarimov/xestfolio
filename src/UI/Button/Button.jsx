const Button = ({ text, className, className2 }) => {
  return (
    <>
      <button
        className={` jakarta relative  text-[18px] font-medium leading-[18px] py-[20px] group px-[30px] duration-300 bg-black text-white  ${className2}`}
      >
        {text}
        <p
          className={` jakarta linearbtn absolute group-hover:duration-300 group-hover:z-10 whitespace-nowrap top-[10px] left-[10px]  text-[18px] font-medium leading-[18px] py-[20px] px-[30px] -z-10  bg-black ${className}`}
        >
          {text}
        </p>
      </button>
    </>
  );
};

export default Button;
