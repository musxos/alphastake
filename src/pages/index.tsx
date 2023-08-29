import { JoinNow } from "@/components/join-now";
import { Landing } from "@/components/landing";
import { MoreAbout } from "@/components/more-about";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Promotion } from "@/components/promotion";
import { Tokens } from "@/components/tokens";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <main className="min-h-screen">
        <Landing />
        <div>
          <Navbar />
          <Promotion />
          <MoreAbout />
          <Projects />
          <Tokens />
          <JoinNow />

          <div className="container mx-auto bg-white">
            <hr />
            <div className="my-32">
              <div className="flex items-center text-center lg:items-baseline lg:flex-row flex-col gap-44">
                <div className="flex flex-col gap-8">
                  <Link href="/home" className="text-4xl font-bold">
                    Home
                  </Link>
                  <Link href="/about" className="text-4xl font-bold">
                    About
                  </Link>
                </div>
                <div className="flex flex-col gap-8">
                  <Link href="/policy" className="text-4xl font-bold">
                    Privacy Policy
                  </Link>
                  <Link href="/tos" className="text-4xl font-bold">
                    Terms of Use
                  </Link>
                </div>
                <div className="flex flex-col gap-8 lg:ml-auto text-center lg:text-right">
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    className="text-4xl font-bold"
                  >
                    Twitter
                  </Link>
                  <Link
                    href="https://telegram.com"
                    target="_blank"
                    className="text-4xl font-bold"
                  >
                    Telegram
                  </Link>
                  <Link
                    href="https://discord.com"
                    target="_blank"
                    className="text-4xl font-bold"
                  >
                    Discord
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
