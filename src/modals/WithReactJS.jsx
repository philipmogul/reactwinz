function WithReactJS({ children }) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl font-bold mb-4">With ReactJS</h1>
      <p className="text-lg mb-6">This is a modal with ReactJS content.</p>
      {children}
    </div>
  );
}

export default WithReactJS;