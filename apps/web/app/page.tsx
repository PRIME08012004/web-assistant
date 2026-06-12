import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { prisma } from "@repo/db";
type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default async function Home() {

  // const user=await prisma.user.findFirst()
 
  return (
    <div className="flex flex-col">
      <h1>Hello From Omkar</h1>
     {/* <div>{user?.email}</div>
     <div>{user?.password}</div> */}
    </div>
  );
}
