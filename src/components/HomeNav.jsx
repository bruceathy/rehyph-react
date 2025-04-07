import HomeListItem from "./HomeListItem";
export default function HomeNav() {
  return (
    <ul>
      <HomeListItem link="html/oneshots.html" text="One-Shots" />
      <HomeListItem link="html/music.html" text="Music" />
      <HomeListItem link="html/merch.html" text="Merch" />
      <HomeListItem link="https://www.patreon.com/" text="Patreon" />
    </ul>
  );
}
