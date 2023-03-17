import React from "react";
import { InstagramMedia } from "react-instagram-media";

const Instashop = () => {
  return (
    <>
      <div>
        our insta shop
        <a
          href="https://www.instagram.com/reel/CVYpANkAeM5/"
          className=""
          target="_blank"
        >
          insta{" "}
        </a>
      </div>

      {/* <InstagramMedia
        uri="https://www.instagram.com/p/B866lKJgReK/"
        renderItem={({ display_url, video_url, type, caption }) => {
          if (type === "video") {
            return (
              <video poster={display_url} controls>
                <source src={video_url} type="video/mp4" />
              </video>
            );
          }

          return <img src={display_url} alt={caption} />;
        }}
        renderMediaList={(children) => <div className="swiper">{children}</div>}
        renderError={() => <div>I have failed to parse it</div>}
        renderLoading={() => <div>Loading</div>}
      /> */}
    </>
  );
};

export default Instashop;
