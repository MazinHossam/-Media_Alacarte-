
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements AfterViewInit {
  @ViewChild('aboutSection') aboutSection!: ElementRef;

  ngAfterViewInit() {

    const ctx = gsap.context(() => {

      gsap.from(".title", {
        opacity: 0,
        y: 50,
        duration: 1
      });

      gsap.to(".line", {
        width: "120px",
        duration: 1,
        delay: 0.3
      });

      gsap.to(".text1", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.4,
        scrollTrigger: {
          trigger: ".text1",
          start: "top 80%"
        }
      });

      gsap.to(".text2", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".text2",
          start: "top 80%"
        }
      });

      gsap.to(".card", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.8,
        scrollTrigger: {
          trigger: ".card",
          start: "top 85%"
        }
      });

    }, this.aboutSection.nativeElement);

  }
}

