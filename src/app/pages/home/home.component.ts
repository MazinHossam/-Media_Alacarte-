import { Component } from '@angular/core';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


ngAfterViewInit() {

  gsap.from(".hero-card", {
    opacity: 0,
    y: 80,
    scale: 0.9,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".hero-card",
      start: "top 80%",
    }
  });


  const card = document.querySelector(".hero-card");

  card?.addEventListener("mousemove", (e: any) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (x - centerX) / 20;

    gsap.to(card, {
      rotateX: -rotateX,
      rotateY: rotateY,
      transformPerspective: 1000,
      duration: 0.4
    });

  });

  card?.addEventListener("mouseleave", () => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power3.out"
    });
  });
  
  const canvas = document.getElementById("particles") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d")!;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles: any[] = [];

  // إنشاء النقاط
  for (let i = 0; i < 70; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speed: Math.random() * 0.6 + 0.2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.y -= p.speed;

      if (p.y < 0) {
        p.y = canvas.height;
        p.x = Math.random() * canvas.width;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
ctx.fillStyle = "rgba(124, 58, 237, 0.4)";
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  draw();
  
   const counters = document.querySelectorAll('.counter');

    const observer = new IntersectionObserver((entries, obs) => {

      entries.forEach((entry) => {
        if (entry.isIntersecting) {

          const counter: any = entry.target;
          const target = +counter.getAttribute('data-target');
          let count = 0;

          const updateCount = () => {
            const increment = target / 100;

            if (count < target) {
              count += increment;
              counter.innerText = Math.floor(count);
              requestAnimationFrame(updateCount);
            } else {
              counter.innerText = target;
            }
          };

          updateCount();

          // يمنع التكرار
          obs.unobserve(counter);
        }
      });

    }, {
      threshold: 0.5 // يبدأ لما 50% من العنصر يظهر
    });

    counters.forEach(counter => observer.observe(counter));
    

  


}




}
gsap.registerPlugin(ScrollTrigger);


