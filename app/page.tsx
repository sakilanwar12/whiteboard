import Whiteboard from "@/components/board/Whiteboard";

export default function Home() {
  return (
    <>
      <h1 className="sr-only">
        Mathboard — Free open-source whiteboard for math videos and handwriting
      </h1>
      <Whiteboard />
    </>
  );
}
