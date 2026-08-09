import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

/* ================================================================
   Replace this with your actual mp4 URL.
   Optionally add a poster image (a still frame) for faster perceived
   load and a nicer paused state — just drop the URL into POSTER_SRC.
   ================================================================ */
const VIDEO_SRC = "https://res.cloudinary.com/irecrm05/video/upload/v1786276266/liquid-bbl_before-after-video.mp4";
const POSTER_SRC = ""; // e.g. "https://your-poster-image.jpg"

/* ================= Motion presets ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const viewport = { once: true, margin: "-60px" };

const BeforeAfterVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section className="relative overflow-hidden bg-[#0A0F12] py-28">
      {/* ========================= LOCAL ANIMATION KEYFRAMES ========================= */}
      <style>{`
        @keyframes bav-breathe {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes bav-pulse-ring {
          0% { box-shadow: 0 0 0px rgba(34,211,238,0.0); }
          50% { box-shadow: 0 0 45px rgba(34,211,238,0.45); }
          100% { box-shadow: 0 0 0px rgba(34,211,238,0.0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .bav-anim, .bav-anim * { animation: none !important; }
        }
      `}</style>

      {/* Background Glow */}

      <div className="absolute inset-0 bav-anim">
        <div
          className="absolute left-1/2 -translate-x-1/2 -top-40 h-[520px] w-[880px] rounded-full bg-cyan-400/20 blur-[190px]"
          style={{ animation: "bav-breathe 8s ease-in-out infinite" }}
        />
        <div className="absolute left-0 bottom-0 h-[340px] w-[340px] rounded-full bg-cyan-500/20 blur-[150px]" />
        <div className="absolute right-0 top-10 h-[340px] w-[340px] rounded-full bg-cyan-300/20 blur-[150px]" />
        <div className="absolute left-1/3 bottom-1/4 h-[220px] w-[220px] rounded-full bg-blue-500/15 blur-[130px]" />

        {/* Faint glowing grid, consistent with the rest of the page */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,211,238,.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,211,238,.25) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Fine film-grain texture for a premium, non-flat finish */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.03] mix-blend-overlay">
          <filter id="bav-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#bav-noise)" />
        </svg>
      </div>

      <div className="relative max-w-5xl px-6 mx-auto">
        {/* Heading */}

        <div className="text-center mb-14">
          <motion.div
            className="flex items-center justify-center gap-2 mb-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 backdrop-blur-xl shadow-[0_0_20px_rgba(34,211,238,0.15)]">
              <div className="h-[2px] w-8 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <span className="text-[11px] font-semibold uppercase tracking-[4px] text-cyan-300">
                See The Results
              </span>
              <div className="h-[2px] w-8 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl font-bold leading-tight text-white lg:text-5xl"
            style={{ textShadow: "0 0 40px rgba(34,211,238,0.2)" }}
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Before{" "}
            <span
              className="text-cyan-300"
              style={{ textShadow: "0 0 30px rgba(34,211,238,0.55), 0 0 70px rgba(34,211,238,0.25)" }}
            >
              &amp; After
            </span>
          </motion.h2>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-white/70"
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            A closer look at the kind of natural, balanced enhancement this
            treatment is designed to achieve. Every body is different, so
            individual results will always vary.
          </motion.p>
        </div>

        {/* Video Frame */}

        <motion.div
          className="relative mx-auto bav-anim w-full max-w-[380px]"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={viewport}
        >
          {/* Glow behind the frame */}
          <div className="absolute inset-0 rounded-[36px] bg-cyan-400/20 blur-[90px]" />

          {/* Glass frame */}
          <div className="relative overflow-hidden rounded-[32px] border border-cyan-400/30 bg-white/[0.04] p-3 shadow-[0_0_70px_rgba(34,211,238,.2),0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            {/* Top inner highlight — glass edge realism */}
            <div className="absolute z-10 h-px pointer-events-none inset-x-5 top-3 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            {/*
              REELS-STYLE FIX:
              - Container is now a fixed vertical 9:16 (`aspect-[9/16]`) frame, like
                Instagram/TikTok reels, instead of the old wide 16:9 box.
              - `object-cover` is fine again here because the frame's own ratio matches
                a portrait video — nothing gets cropped off the top/bottom, it fills
                the frame edge-to-edge just like a reel.
              - If your source video is landscape, swap `object-cover` for
                `object-contain` so it letterboxes instead of cropping.
            */}
            <div
              className="relative aspect-[9/16] cursor-pointer overflow-hidden rounded-[24px] bg-black"
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                src={VIDEO_SRC}
                poster={POSTER_SRC || undefined}
                muted={isMuted}
                playsInline
                loop
                className="object-cover w-full h-full"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Dim overlay when paused, for the play button to stand out */}
              <div
                className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
                  isPlaying ? "opacity-0" : "opacity-100"
                }`}
              />

              {/* Play / Pause button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/40 bg-[#081116]/90 backdrop-blur-xl transition-all duration-300 sm:h-20 sm:w-20 ${
                    isPlaying ? "opacity-0 scale-90" : "opacity-100 scale-100"
                  }`}
                  style={{ animation: isPlaying ? "none" : "bav-pulse-ring 3s ease-in-out infinite" }}
                >
                  {isPlaying ? (
                    <Pause size={26} className="text-cyan-300" />
                  ) : (
                    <Play size={26} className="ml-1 text-cyan-300" />
                  )}
                </div>
              </div>

              {/* Mute toggle */}
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-[#081116]/90 text-cyan-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/60 hover:bg-[#081116] z-20"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>

              {/* Neon edge glow along bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-cyan-400/70 blur-[2px] z-10" />
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}

        <motion.p
          className="mx-auto mt-8 max-w-xl text-center text-[13px] italic text-white/40"
          variants={fadeUp}
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          Results shown are for illustrative purposes. Individual results
          vary and are not guaranteed.
        </motion.p>
      </div>

      {/* Bottom Glow Line — consistent with the rest of the page */}

      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
    </section>
  );
};

export default BeforeAfterVideo;