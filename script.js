// inserting contact details

const contacts = {
  email: "mishrishav@gmail.com",
  phone: "(+91) 7004932616",
};

const contactSection = document.querySelector(".contactsSection");

const phoneDiv = document.createElement("div");
phoneDiv.innerHTML = `<p>Phone</p><span>${contacts.phone}</span>`;

const emailDiv = document.createElement("div");
emailDiv.innerHTML = `<p>Email</p><span>${contacts.email}</span>`;

contactSection.appendChild(phoneDiv);
contactSection.appendChild(emailDiv);

// inserting skills details

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
  const span = document.createElement("span");
  span.textContent = skill;
  span.classList.add("skillItem");
  skillsSection.appendChild(span);
});
