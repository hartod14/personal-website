export default function Title({ title }: { title: string }) {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-3">{title}</h1>
      <div className="w-20 h-1 bg-blue-600 mx-auto mb-3"></div>
    </div>
  );
}
