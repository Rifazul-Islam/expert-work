"use client";
function ErrorPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Oops! Something went wrong.</h1>
      <Link className="mt-5 " href="/"></Link>
      <button className="btn btn-outline"> Go Home </button>
    </div>
  );
}

export default ErrorPage;
