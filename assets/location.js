function openMenu() {
  document.body.classList.add("menu-open");
}

function closeMenu() {
  document.body.classList.remove("menu-open");
}

const map = L.map('serviceMap').setView(
  [35.0537, -85.0519],
  8
);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution:
      '&copy; OpenStreetMap contributors'
  }
).addTo(map);

const headquarters = L.marker(
  [35.0537, -85.0519]
).addTo(map);

headquarters.bindPopup(`
  <div class="project_popup">
    <h3>Quality Floors HQ</h3>

    <p>
      Based in Collegedale, Tennessee
    </p>

    <a href="/assets/about.html">
      Learn More About Us
    </a>
  </div>
`);

const projects = [

{
  name: "Lookout Mountain Project",
  coords: [34.9959, -85.3494],
  image: "/assets/project1.png",
  link: "/assets/projects.html#project1"
},

{
  name: "Knoxville Project",
  coords: [35.9606, -83.9207],
  image: "/assets/project2.png",
  link: "/assets/projects.html#project2"
},

{
  name: "Jasper Project",
  coords: [35.0745, -85.6261],
  image: "/assets/project3.png",
  link: "/assets/projects.html#project3"
},

{
  name: "Signal Mountain Project",
  coords: [35.1223, -85.3430],
  image: "/assets/project4.png",
  link: "/assets/projects.html#project4"
},

{
  name: "Ringgold Project",
  coords: [34.9159, -85.1091],
  image: "/assets/project5.png",
  link: "/assets/projects.html#project5"
},

{
  name: "Cleveland Project",
  coords: [35.1595, -84.8766],
  image: "/assets/project6.png",
  link: "/assets/projects.html#project6"
}

];

projects.forEach(project => {

  L.marker(project.coords)
    .addTo(map)
    .bindPopup(`
      <div class="project_popup">

        <img
          src="${project.image}"
          alt="${project.name}"
        >

        <h3>${project.name}</h3>

        <a href="${project.link}">
          View Project
        </a>

      </div>
    `);

});

L.circle(
  [35.0537, -85.0519],
  {
    radius: 80000,
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.08
  }
).addTo(map);