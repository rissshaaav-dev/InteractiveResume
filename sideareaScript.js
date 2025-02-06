// inserting contact details

const contacts = {
  email: "mishrishav@gmail.com",
  phone: "(+91) 9876543210",
};

const contactSection = document.querySelector(".contactsSection");

const phoneDiv = document.createElement("div");
phoneDiv.innerHTML = `<p>Phone:</p><span><em>${contacts.phone}</em></span>`;
phoneDiv.classList.add("contactItem");

const emailDiv = document.createElement("div");
emailDiv.innerHTML = `<p>Email:</p><span><em>${contacts.email}</em></span>`;
emailDiv.classList.add("contactItem");

contactSection.appendChild(phoneDiv);
contactSection.appendChild(emailDiv);

// inserting education details

const educations = [
  {
    degree: "B.Tech CSE",
    school: "VIT Bhopal University",
    location: "Bhopal, MP",
    year: "2021-2025",
  },
  {
    degree: "Senior Secondary",
    school: "Shanti Niketan Sr. Sec. School",
    location: "Muzaffarpur, Bihar",
    year: "2018-2020",
  },
];

const educationSection = document.querySelector(".educationSection");

educations.forEach((item) => {
  educationSection.insertAdjacentHTML(
    "beforeend",
    `<div class="educationItem">
      <h3>${item.degree}</h3>
      <p><em>${item.school}</em></p>
      <p>${item.location}</p>
      <p>${item.year}</p>
    </div>`
  );
});

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
