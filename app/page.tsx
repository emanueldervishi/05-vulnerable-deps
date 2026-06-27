export default function Page() {
  return (
    <main style={{ fontFamily: "system-ui", padding: 48 }}>
      <h1>Vulnerable Dependencies</h1>
      <p>This app pins intentionally older dependencies so package audit has findings.</p>
    </main>
  );
}
