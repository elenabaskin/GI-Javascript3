function personalInfo() {
  const ppi = { name: "Blank Canvas", ssn: 1234567890 };
  function getName() {
    console.log(ppi.name);
  }
  return getName();
}
personalInfo();
