import { useEffect, useImperativeHandle, useRef, useState } from "react";

export default function MovieDetail({ movieId, modalRef }) {
  const detailRef = useRef();
  useImperativeHandle(modalRef, () => ({
    open() {
      detailRef.current.showModal();
    },
    close() {
      detailRef.current.close();
    },
  }));

  const [movie, setMovie] = useState();
  const [casts, setCasts] = useState();
  const [similar, setSimilar] = useState();
  const [actorsMovie, setActorsMovie] = useState();

  useEffect(() => {}, []);
  useEffect(() => {}, [casts]);

  return <dialog ref={detailRef}></dialog>;
}
