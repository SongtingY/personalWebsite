const DownloadButton = ({ filename, children }) => {
    return (
      <a href={filename} download className="download-button">
        {children}
      </a>
    );
  };

export default DownloadButton;