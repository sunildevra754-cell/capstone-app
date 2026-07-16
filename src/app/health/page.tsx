export default async function HealthPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-16 sm:px-6">
      <h1 className="text-2xl font-bold mb-6">Health Check</h1>
      <div className="rounded-lg border border-gray-200 p-6 space-y-2">
        <p><span className="font-semibold">ID:</span> {data.id}</p>
        <p><span className="font-semibold">Title:</span> {data.title}</p>
        <p>
          <span className="font-semibold">Completed:</span>{" "}
          {data.completed ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
}