import Card from "./Card.jsx";

export default function Features() {
  const info = [
    {
      index: "Article Generator",
      desc: "Generate high-quality articles with ease.",
    },
    {
      index: "Article Generator",
      desc: "Generate high-quality articles with easeLorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, unde",
    },
    {
      index: "Article Generator",
      desc: "Generate high-quality articles with ease.",
    },
    {
      index: "Article Generator",
      desc: "Generate high-quality articles with ease.",
    },
    {
      index: "Article Generator",
      desc: "Generate high-quality articles with ease.",
    },
    {
      index: "Article Generator",
      desc: "Generate high-quality articles with ease.",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center gap-3 md:gap-5 lg:gap-7 xl:gap-8 mt-20 w-full min-h-[100vh] overflow-hidden">
      <p className="w-[90%] sm:w-[85%] md:w-[80%] max-w-[600px] font-[500] text-2xl text-center md:text-3xl lg:text-5xl lg:leading-[60px] xl:leading-[70px]">
        Most Popular Tools
      </p>
      <p className="w-[90%] sm:w-[85%] md:w-[80%] max-w-[700px] text-center">
        These are the most popular tools a good place to start. <br />
        Give them a try.
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-5 sm:gap-8 md:gap-10 lg:px-9 xl:px-10">
        {info.map((item) => {
          return <Card index={item.index} desc={item.desc} />;
        })}
      </div>
    </div>
  );
}