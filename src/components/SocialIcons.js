const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/Atharva1802">
        <i className="fa-brands fa-github" aria-hidden="true" title="Atharva Bhawsar' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/atharva-bhawsar/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Atharva Bhawsar' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/atharva1802/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Atharva Bhawsar' Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/atharvadftba">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Atharva Bhawsar' Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
