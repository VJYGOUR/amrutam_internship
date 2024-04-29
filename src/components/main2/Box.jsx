import styles from "./Box.module.css";
function Box({ data, children }) {
  return (
    <div className={`${styles.box} bg-bwhite rounded-lg px-6 py-12 `}>
      <p className="text-xl font-bold py-3">{data}</p>
      <span>{children}</span>
    </div>
  );
}

export default Box;
