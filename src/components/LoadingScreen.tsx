import { useProgress } from "@react-three/drei";

export const LoadingScreen = () => {
  const { progress, active } = useProgress();
  return (
    <div
      className={`fixed inset-0 bg-gradient-to-b from-[#b8c6db] to-[#f5f7fa] z-10 p-16 flex items-center justify-center ${
        !active && "hidden"
      }`}
      style={{ opacity: 1 - progress / 100 }}
    >
      <h1 className="text-xl font-bold">Loading... ({progress}%)</h1>
    </div>
  );
};
