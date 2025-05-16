import { useRef } from "react";
import Input from "../ui/Input";

export default function WriteArticle() {
  const subjectRef = useRef();
  const fileRef = useRef();
  const contentRef = useRef();

  const saveHandler = () => {
    console.log("Save!");
  };

  return (
    <div>
      <Input id="subject" title="제목" type="text" ref={subjectRef} />
      <Input type="file" id="file" title="첨부파일" ref={fileRef} />
      <textarea ref={contentRef}></textarea>
      <button type="button" onClick={saveHandler}>
        저장
      </button>
    </div>
  );
}
