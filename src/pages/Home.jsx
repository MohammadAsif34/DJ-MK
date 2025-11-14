// src/App.jsx

import React from "react";
import About from "../components/About";
import GigsPage from "../components/GigsPage";
import GalleryGrid from "../components/GalleryGrid";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { Flyer } from "../components/Flyer";
import { ImgGrid } from "../components/ImgGrid";
import { Contact } from "../components/Contact";
import VideoPlayer from "../components/VideoPlayer";
import TrackList from "../components/TrackList";
import { AppBackground } from "../components/AppBackground";
export default function Home() {
  const gallery = [
    { src: "/gallery/1.jpg" },
    { src: "/gallery/2.jpg" },
    { src: "/gallery/3.jpg" },
  ];

  return (
    <>
      <AppBackground>
        {/* <AppBackground /> */}
        <Hero />
        <div className="px-[10%] ">
          {/* <AudioPlayer src="/mixes/latest.mp3" /> */}
          <TrackList />
          {/* <VideoPlayer /> */}
          <About />
          <GigsPage />
          <ImgGrid />
          <Flyer />
          <BookingForm />
          {/* <Contact /> */}
        </div>
        <Footer />
      </AppBackground>
    </>
  );
}
