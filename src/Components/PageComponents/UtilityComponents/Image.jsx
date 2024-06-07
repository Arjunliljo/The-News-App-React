function Image({
  width = "100%",
  height = "100%",
  src = "https://tpc.googlesyndication.com/simgad/13553850865721847781",
  alt = "News thumbnail",
  className = "",
}) {
  return (
    <div
      style={{
        minWidth: width,
        minHeight: height,
      }}
      className={`fitImage ${className}`}
    >
      <img src={src} alt={alt} />
    </div>
  );
}

export default Image;
