export default function Button({ label, onClick }) {
  return (
    <button 
      className="font-gopher-mono items-center color-dark border-3 border-thick-border-gray py-1 hover:bg-gray-200"
      onClick={onClick}
    >
      {label}
    </button>
  );
};