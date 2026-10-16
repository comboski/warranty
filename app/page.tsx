type HomeProps = {
  searchParams: Promise<{ test?: string | string[] }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const guideUrl = params.test === "1" ? "/guide/?test=1" : "/guide/";

  return (
    <main className="guide-frame-shell">
      <iframe
        className="guide-frame"
        src={guideUrl}
        title="Combo Ski – garanční prohlídka"
        allow="fullscreen"
      />
    </main>
  );
}
