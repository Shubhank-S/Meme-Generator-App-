import React, { useState ,createRef } from "react";
import Text from "../components/Text";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { exportComponentAsJPEG } from "react-component-export-image";

const Editpage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const memeRef = createRef();
  console.log(params.get("url"));
  const addText = () => {
    setCount(count+1)
  };

  return (
    <div>
      <div style={{width: '500px', border: '2px solid '}} ref={memeRef} className="meme mt-5 mb-5">
        <img src={params.get("url")} alt="No Image" width="300px" />
        {Array(count)
          .fill(0)
          .map((e) => (
            <Text />
          ))}
      </div>
      <Button onClick={addText} style={{margin: '5px'}}>Add Text</Button>
      <Button onClick={(e)=> exportComponentAsJPEG(memeRef)} variant="Danger">Save</Button>
    </div>
  );
};

export default Editpage;
