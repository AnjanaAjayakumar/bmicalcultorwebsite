const needle = document.getElementById("needle");

        needle.addEventListener("mouseenter", () => {
            gsap.to("#needle", { rotation: 360, duration: 1, ease: "power2.out" });
        });

        needle.addEventListener("mouseleave", () => {
            gsap.to("#needle", { rotation: 0, duration: 1, ease: "power2.out" });
        });