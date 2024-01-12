import { useProgress } from "@react-three/drei";

export const LoadingScreen = () => {
  const { progress, active } = useProgress();
  return (
    <div
      className={`fixed inset-0 bg-gradient-to-b from-[#667e75] to-[#4B5563] z-10 p-16 flex items-center justify-center ${
        !active && "hidden"
      }`}
      style={{ opacity: 1 - progress / 100 }}
    >
      <h1 className="text-xl font-bold">
        Loading... ({Math.floor(progress)}%)
      </h1>
    </div>
  );
};
