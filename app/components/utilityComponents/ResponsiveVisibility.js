import useScreenHeight from "@/app/hooks/useScreenHeight";

const ResponsiveVisibility = ({ minHeight, children }) => {
  const screenHeight = useScreenHeight();

  // Render null on server-side to ensure no incorrect rendering before client-side JavaScript kicks in
  if (typeof window === 'undefined') {
    return null;
  }

  const isVisible = screenHeight > minHeight;

  return isVisible ? <>{children}</> : null;
};

export default ResponsiveVisibility;
