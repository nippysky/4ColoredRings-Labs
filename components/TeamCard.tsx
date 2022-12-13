import Image from "next/image";

function TeamCard(props: any): any {
  const { image, title, name, alias } = props;
  return (
    <div className="w-full text-center lg:text-left">
      <Image
        src={image}
        alt={name}
        width={350}
        height={350}
        quality={100}
        priority
      />

      <div className="my-2">
        <h5 className="text-[1rem] text-amber font-semibold">{title}</h5>
        <p className="mt-1 text-[1.2rem] text-black dark:text-white">{name}</p>
        <p className="mt-1 text-[1.2rem] text-[#FFD700]">{alias}</p>
      </div>
    </div>
  );
}

export default TeamCard;
