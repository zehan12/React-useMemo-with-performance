import { Fragment, useMemo, useState } from "react";

const Memo = () => {
  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(true);

  const getValue = () => {
    return setMyNum(myNum + 1);
  };

  const countNumber = (num) => {
    let c = 0;
    for (let i = 0; i < 10000; i++) {
      c++;
      console.log(c);
    }
    return num;
  };

  const checkData = useMemo(() => {
    return countNumber(myNum);
  }, [myNum]);

  return (
    <Fragment>
      <button onClick={getValue} style={{ backgroundColor: "red" }}>
        Counter
      </button>
      <p> My new Number: {checkData} </p>
      <button onClick={() => setShow(!show)}>
        {show ? "Homelander" : "Billy "}
      </button>
    </Fragment>
  );
};

export default Memo;
