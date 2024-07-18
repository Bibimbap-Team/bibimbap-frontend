type ChangelogProps = {
  date: string;
  content: string;
};

export default function Changelog({ date, content }: ChangelogProps) {
  return (
    <div>
      <b>{date}</b> - {content}
    </div>
  );
}
