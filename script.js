const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React.js",
    "Node.js",
    "Next.js",
    "Java",
  ];
  
  const skillsSection = document.querySelector(".skillsSection");
  
  skills.forEach((skill) => {
    const span = document.createElement("span"); // Create a span element
    span.textContent = skill; // Set text content (corrected)
    span.classList.add("skillItem"); // Add a class
    skillsSection.appendChild(span); // Append it to the section
  });
  