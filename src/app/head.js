import { themeScript } from "@/script/theme-script";

export default function Head() {
  return (
    <>
      <title>{`Ishan's Portfolio`}</title>
      <script dangerouslySetInnerHTML={{__html : themeScript}} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}