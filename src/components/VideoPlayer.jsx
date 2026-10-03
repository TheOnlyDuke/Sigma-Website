export default function VideoPlayer({ title, src, style, ...props }) {
  return (
    <iframe
      src={src}
      style={{ width: "100%", height: "100%", border: "none", ...style }}
      allowFullScreen
      title={title}
      {...props}
    ></iframe>
  );
}
