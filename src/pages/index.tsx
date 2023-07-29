import { JoinNow } from "@/components/join-now";
import { Landing } from "@/components/landing";
import { MoreAbout } from "@/components/more-about";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Promotion } from "@/components/promotion";
import { Tokens } from "@/components/tokens";

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
                  <h3 className="text-4xl font-bold">Home</h3>
                  <h3 className="text-4xl font-bold">About</h3>
                </div>
                <div className="flex flex-col gap-8">
                  <h3 className="text-4xl font-bold">Privacy Policy</h3>
                  <h3 className="text-4xl font-bold">Terms of Use</h3>
                </div>
                <div className="flex flex-col gap-8 lg:ml-auto text-center lg:text-right">
                  <h3 className="text-4xl font-bold">Twitter</h3>
                  <h3 className="text-4xl font-bold">Telegram</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
