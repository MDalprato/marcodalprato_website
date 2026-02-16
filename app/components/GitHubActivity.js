export default function GitHubActivity({ username = 'MDalprato' }) {
  const chartUrl = `https://ghchart.rshah.org/3ba058/${username}`;

  return (
    <div className="github-activity-widget">
      <img
        className="github-activity-chart"
        src={chartUrl}
        alt={`GitHub activity chart for ${username}`}
        loading="lazy"
      />
    </div>
  );
}
