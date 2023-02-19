import "./styles.css";
import { useCallback } from "react";
import VideoCard from "./components/VideoCard";
import CardGroup from "./components/CardGroup";
import DataLoader from "./components/DataLoader";
import DataProvider from "./components/DataProvider";
import SelfLoadedVideoCard from "./components/SelfLoadedVideoCard";
import VideoCardGroup from "./components/VideoCardGroup";
import { getAllVideoDetails } from "./data-providers/video-data-provider";
import videosContext from "./context-defs/videos";
import * as fake from "./_fakes_";
import "./map-video-types";

export default function App() {
  const load3Video = useCallback(() => getAllVideoDetails(3), []);

  return (
    <div className="container py-4 px-3 mx-auto">
      <CardGroup>
        <VideoCard video={fake.Stream("stream#1")} />
        <VideoCard video={fake.RecordedVideo("video#1")} />
      </CardGroup>

      <hr />

      <CardGroup direction="horizontal">
        {fake
          .videos(3)
          .map(fake.extend)
          .map((video) => (
            <VideoCard video={video} key={video.id} />
          ))}
      </CardGroup>

      <hr />

      <CardGroup>
        <DataLoader
          getData={load3Video}
          render={(video) => <VideoCard video={video} key={video.id} />}
        />
      </CardGroup>

      <hr />

      <CardGroup>
        <SelfLoadedVideoCard id={"100"} type="recorded" />
        <SelfLoadedVideoCard id={"101"} type="stream" />
        <SelfLoadedVideoCard id={"102"} type="stream" />
      </CardGroup>

      <hr />

      <DataProvider getData={load3Video} context={videosContext}>
        <VideoCardGroup />
      </DataProvider>

      <hr />

      <DataProvider getData={load3Video} context={videosContext}>
        <videosContext.Consumer>
          {(videos) => (
            <VideoCardGroup direction="horizontal" videos={videos} />
          )}
        </videosContext.Consumer>
      </DataProvider>
    </div>
  );
}
