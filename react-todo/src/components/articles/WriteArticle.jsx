import { useRef, useState } from "react";
import Input from "../ui/Input";
import { writeArticle } from "../../http/articleHttp";

export default function WriteArticle({ onSuccess }) {
  const [subjectError, setSubjectError] = useState();
  const [contentError, setContentError] = useState();

  const subjectRef = useRef();
  const fileRef = useRef();
  const contentRef = useRef();

  const saveHandler = async () => {
    setContentError(undefined);
    setSubjectError(undefined);

    const chosenFile = fileRef.current.files;

    try {
      await writeArticle(
        subjectRef.current.value,
        contentRef.current.value,
        chosenFile.length > 0 ? chosenFile[0] : undefined
      );
      onSuccess();
    } catch (e) {
      const errorObj = JSON.parse(e.message);
      if (errorObj.error) {
        if (errorObj.error.content) {
          setContentError(errorObj.error.content[0]);
        }
        if (errorObj.error.subject) {
          setSubjectError(errorObj.error.subject[0]);
        }
      }
    }
  };

  return (
    <div>
      <Input id="subject" title="제목" type="text" ref={subjectRef} />
      <div>{subjectError}</div>

      <Input type="file" id="file" title="첨부파일" ref={fileRef} />

      <textarea ref={contentRef}></textarea>
      <div>{contentError}</div>

      <button type="button" onClick={saveHandler}>
        저장
      </button>
    </div>
  );
}
