export const BlueScreenOfDeath = () => (
  <div
    style={{
      backgroundColor: "#0078d4",
      color: "white",
      padding: "40px 20px",
      fontFamily: "Consolas, monospace",
      fontSize: "14px",
      lineHeight: "1.4",
      height: "100%",
      width: "100%",
      minHeight: "410px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: 0,
      boxSizing: "border-box",
      overflow: "hidden",
    }}
  >
    <div style={{ fontSize: "120px", marginBottom: "20px" }}>:(</div>
    <div style={{ fontSize: "24px", marginBottom: "20px" }}>
      Recruiter ran into a problem and needs to reboot.
    </div>
    <div style={{ marginBottom: "20px" }}>
      Please wait while the error is processed and you will return to the prior
      screen, where you can learn about Katherine's career status.
    </div>
    <div style={{ fontSize: "12px", opacity: 0.8 }}>
      Error code:
      <br />
      DEVELOPER_TOO_GOOD_TO_IGNORE
    </div>
  </div>
);
