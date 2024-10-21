type LoaderProps = {};

export default function Loader(props: LoaderProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-neutral-600/10 backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
}