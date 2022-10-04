import { Fragment } from "react";
import Memo from "./components/Memo";
import "./styles.css";

export default function App() {
  return (
    <Fragment>
      <h1>useMemo()</h1>
      <Memo />
    </Fragment>
  );
}
