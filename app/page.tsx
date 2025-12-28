import UploadForm from "./components/UploadForm";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold text-center">
          Image Editor
        </h1>
        <UploadForm />
      </div>
    </main>
  );
}
