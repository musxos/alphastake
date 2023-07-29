export function Landing() {
  return (
    <section className="relative h-screen bg-[url(/background.png)] bg-center bg-cover">
      <img
        className="w-80 h-80 lg:w-[512px] lg:h-[512px] object-contain absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
        src="/logo.png"
        alt=""
      />
    </section>
  );
}
