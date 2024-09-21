import Image from "next/image";
import Script from "next/script";
import Head from "next/head";
import Login from "@/app/login/page"

export default function Home() {
  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=SUSE:wght@100..800&display=swap" rel="stylesheet"></link>
<Login />
</>
  );
}
