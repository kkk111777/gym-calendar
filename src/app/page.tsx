export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center bg-zinc-50 px-4 dark:bg-zinc-950">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-md dark:bg-zinc-900">
        <h1 className="text-3xl font-bold tracking-tight text-emerald-600">
          Gym Calendar
        </h1>
        <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
          記録から、次のジムの日とメニューを提案するアプリ（準備中）
        </p>
        <p className="mt-6 inline-block rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700">
          フェーズ0：土台づくり
        </p>
      </div>
    </main>
  );
}
