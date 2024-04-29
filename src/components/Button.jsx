function Button({ children }) {
  return (
    <button className="bg-bbutton px-4 py-3 text-bwhite rounded text-sm uppercase">
      {children}
    </button>
  );
}

export default Button;
