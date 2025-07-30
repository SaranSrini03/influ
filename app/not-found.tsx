// app/not-found.tsx

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <h1 className="text-4xl font-bold text-blue-600">404 - Page Not Found</h1>
      <p className="mt-4 text-gray-600 text-lg">
        Sorry, we couldn’t find the page you were looking for.
      </p>
    </div>
  );
}
