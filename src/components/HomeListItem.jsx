/* eslint-disable react/prop-types */
export default function HomeListItem({ link, text }) {
  return (
    <li>
      <a href={link}>{text}</a>
    </li>
  );
}
