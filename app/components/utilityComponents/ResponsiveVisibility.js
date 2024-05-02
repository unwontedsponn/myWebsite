import useScreenHeight from "@/app/hooks/useScreenHeight";

// Define the ResponsiveVisibility functional component with props for minHeight and children.
const ResponsiveVisibility = ({ minHeight, children }) => {
  // Use the imported useScreenHeight hook to get the current screen height.
  const screenHeight = useScreenHeight();

  // Determine if the content should be visible by comparing the screen height to the passed minHeight.
  const isVisible = screenHeight > minHeight;

  // Conditionally render the children based on the isVisible value:
  // If isVisible is true, render the children inside a React fragment to avoid adding extra nodes to the DOM.
  // If isVisible is false, render nothing by returning null.
  return isVisible ? <>{children}</> : null;
};

// Export the ResponsiveVisibility component so it can be used in other parts of the application.
export default ResponsiveVisibility;
