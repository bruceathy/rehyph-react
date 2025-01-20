export default function HomeListItem({ href, text }) {
  return (
    <li>
      <a href={href}>{text}</a>
    </li>
  );
}
