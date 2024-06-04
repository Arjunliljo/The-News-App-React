function Image({
  width = "100px",
  height = "100px",
  src = "https://tpc.googlesyndication.com/simgad/13553850865721847781",
  alt = "News thumbnail",
  className = "",
}) {
  return (
    <div
      style={{ width: width, height: height }}
      className={`fitImage ${className}`}
    >
      <img src={src} alt={alt} />
    </div>
  );
}

export default Image;
