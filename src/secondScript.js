const nextBtn = document.getElementById("next"),
  previousBtn = document.getElementById("previous");
function createTestimonialElements(e) {
  let t = document.getElementById("main-parent-div");
  t.innerHTML = "";
  let a = document.createElement("div"),
    i = document.createElement("div"),
    n = document.createElement("div");
  a.classList.add("text-section"),
    n.classList.add("triangle-clip"),
    i.classList.add("images-section"),
    e.forEach((e) => {
      let s = document.createElement("h3");
      (s.innerHTML = e.title), (s.style.display = "none");
      let o = document.createElement("p");
      (o.innerHTML = e.message), (o.style.display = "none");
      let l = document.createElement("div");
      e.show
        ? (l.classList.add("image-div", "front-div"),
          (s.style.display = "block"),
          (o.style.display = "block"))
        : l.classList.add("image-div");
      let r = document.createElement("img");
      r.classList.add("testimonial-image"),
        (r.src = e.imageSrc),
        (r.alt = e.name);
      let m = document.createElement("h3");
      m.classList.add("testimonial-name"),
        (m.textContent = e.name),
        l.appendChild(r),
        l.appendChild(m),
        a.appendChild(s),
        a.appendChild(o),
        a.appendChild(n),
        i.appendChild(l),
        t.appendChild(a),
        t.appendChild(i);
    });
}
const testimonialsData = [
  {
    imageSrc: "./images/testo33.jpg",
    name: "R. Sharma",
    message:
      "Working with this team has transformed our online presence. Their expertise in web development and social media management helped us engage our audience like never before. The attention to detail and timely delivery were commendable. Highly recommend!",
    title: "Exceptional",
  },
  {
    imageSrc: "./images/testo44.jpg",
    name: "Priya Desai",
    message:
      "The graphic design skills are exceptional! They understood our brand vision and delivered stunning visuals that truly represent us. The entire process was smooth and collaborative. Our marketing materials have never looked better. Thank you for the creativity!",
    title: "Outstanding",
  },
  {
    imageSrc: "./images/testo1.jpg",
    name: "Ankit Mehta",
    message:
      "Thanks to the Power BI implementation, we now have actionable insights from our data. Their understanding of our business needs made the process seamless. Our decision-making has improved significantly, and I couldn’t be happier with the results!",
    title: "Transformative",
  },
  {
    imageSrc: "./images/testo55.jpg",
    name: "Sneha",
    message:
      "The expertise in Microsoft SharePoint has streamlined our workflow. The solution implemented has improved team collaboration and project management. The support and guidance throughout the setup made it a hassle-free experience. Highly appreciated!",
    title: "Impressive",
  },
  {
    imageSrc: "./images/testo22.jpg",
    name: "Vandana K",
    message:
      "The Brand Book created for us captured our identity beautifully and has been a valuable resource for our team. The professionalism and understanding of branding have truly set us apart. A great investment for any business!",
    title: "Reliable",
  },
];
function rotateRight(e) {
  let t = e.pop();
  return e.unshift(t), e;
}
function rotateLeft(e) {
  let t = e.shift();
  return e.push(t), e;
}
(testimonialsData[2].show = !0), createTestimonialElements(testimonialsData);
let notWaitTime = !0;
nextBtn.addEventListener("click", () => {
  (notWaitTime = !1), (testimonialsData[2].show = !1);
  let e = rotateRight(testimonialsData);
  (e[2].show = !0),
    createTestimonialElements(e),
    setTimeout(() => {
      notWaitTime = !0;
    }, 5e3);
}),
  previousBtn.addEventListener("click", () => {
    (notWaitTime = !1), (testimonialsData[2].show = !1);
    let e = rotateLeft(testimonialsData);
    (e[2].show = !0),
      createTestimonialElements(e),
      setTimeout(() => {
        notWaitTime = !0;
      }, 5e3);
  }),
  setInterval(() => {
    if (notWaitTime) {
      testimonialsData[2].show = !1;
      let e = rotateLeft(testimonialsData);
      (e[2].show = !0), createTestimonialElements(e);
    }
  }, 3e3);
