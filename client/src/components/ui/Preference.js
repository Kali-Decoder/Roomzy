const preferenceStyle = {
  backgroundColor: "#ff7a7a",
  padding: "0.25rem 0.5rem",
  borderRadius: "0.25rem",
  color: "white",
 display: "inline-block",
  fontSize: "0.75rem",
};

const Preferences = () => (
  <div className="max-w-md flex flex-col border-3 border-dotted rounded-lg bg-white p-6 pb-10 text-gray-900">
    <p className="text-lg font-medium">Your Preferences</p>
    <div className="mt-4 flex flex-wrap gap-2">
      <span style={preferenceStyle}>Non Alcoholic</span>
      <span style={preferenceStyle}>Fitness Freak</span>
      <span style={preferenceStyle}>Sporty</span>
      <span style={preferenceStyle}>Night Owl</span>
      <span style={preferenceStyle}>Party Lover</span>
    </div>
  </div>
);

export default Preferences;
