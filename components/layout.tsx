import { ReactElement } from "react";
import MusicPlayer from "./music-player";

export default function Layout({ children }: { children: ReactElement }) {
  return <>
    <MusicPlayer />
    { children }
  </>
}