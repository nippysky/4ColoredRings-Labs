import Link from "next/link";

export default function Button(props: { link: string; children: any }) {
  const { link, children } = props;
  return (
    <Link href={link}>
      <a className="flex cursor-pointer font-semibold text-[1.2rem]">
        {children}
      </a>
    </Link>
  );
}
