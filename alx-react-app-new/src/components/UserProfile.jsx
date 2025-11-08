// src/components/UserProfile.jsx
export default function UserProfile(props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "12px",
        margin: "12px",
        borderRadius: 8,
      }}
    >
      <h2 style={{ color: "blue", fontSize: "1.5rem", margin: 0 }}>
        {props.name}
      </h2>
      <p style={{ margin: "6px 0" }}>
        Age: <span style={{ fontWeight: "bold" }}>{props.age}</span>
      </p>
      <p style={{ marginTop: 8 }}>{props.bio}</p>
    </div>
  );
}
