import HomeListItem from "./HomeListItem";
export default function HomeNav() {
  return (
    <ul>
      <HomeListItem href="html/oneshots.html" text="One-Shots" />
      <HomeListItem href="html/music.html" text="Music" />
      <HomeListItem href="html/merch.html" text="Merch" />
      <HomeListItem href="https://www.patreon.com/" text="Patreon" />
    </ul>
  );
}
