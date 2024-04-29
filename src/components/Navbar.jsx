function Navbar() {
  return (
    <div className="py-3 px-4">
      <section className="flex gap-12 items-center sm:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="13">
          <g fill="#33323D" fillRule="evenodd">
            <path d="M0 0h24v1H0zM0 6h24v1H0zM0 12h24v1H0z" />
          </g>
        </svg>
        <h2>Amrutam</h2>
      </section>
      <section className="hidden sm:flex sm:justify-between">
        <h2>Amrutam</h2>
        <span>Home</span>
        <span>About</span>
        <span>Contact us</span>{" "}
      </section>
    </div>
  );
}

export default Navbar;
