// src/App.jsx or Home.jsx
// import VideoPlayer from "./components/VideoPlayer";

export default function VideoPlayer({ track }) {
  return (
    <>
      <div id="mixes" className="b g-neutral-950 text-white ">
        <iframe
          className="w-full h-50 md:h-[50vh]  rounded-2xl shadow-2xl border-2 border-gray-800"
          src={`https://www.youtube.com/embed/${
            track.trackUrl
          }?autoplay=${true}&mute=1`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write;  encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kRlaJsxEQ4c?si=qvX92pIcI5UbPUzZ&amp;start=174"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe> */}
      </div>
    </>
  );
}
// https://youtu.be/kRlaJsxEQ4c?si=OXxz_SBkfidqaAOP
