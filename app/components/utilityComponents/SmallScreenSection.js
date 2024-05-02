export default function SmallScreenSection({ 
  children, 
  xlHidden = true, 
  breakpoint = 'xl',
  spaceY = 'space-y-6', 
  py = 'py-0' 
}) {
  const containerClasses = `h-screen overflow-hidden flex flex-col justify-center items-center ${spaceY} px-16 ${py} ${xlHidden ? 'xl:hidden' : ''}`;

  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
}
