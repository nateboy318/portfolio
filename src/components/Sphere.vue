<template>
  <div ref="sceneContainer" class="scene-container"></div>
</template>

<script>
import * as THREE from "three";

export default {
  mounted() {
    // Set up Three.js scene
    this.initThreeScene();
  },
  methods: {
    initThreeScene() {
      // Create scene
      const scene = new THREE.Scene();

      // Create camera
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5;

      // Create renderer
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      this.$refs.sceneContainer.appendChild(renderer.domElement);

      // Create wireframe orb
      const geometry = new THREE.SphereGeometry(3, 16, 16);
      const material = new THREE.MeshBasicMaterial({
        wireframe: true,
        color: 0x212121,
      });
      const orb = new THREE.Mesh(geometry, material);
      scene.add(orb);

      // Add animation
      const animate = () => {
        requestAnimationFrame(animate);

        // Rotate the orb
        if (!this.isDragging) {
          orb.rotation.x += 0.001; // Continuous rotation
          orb.rotation.y += 0.001; // Continuous rotation
        }

        renderer.render(scene, camera);
      };

      animate();

      // Drag-to-rotate functionality
      this.isDragging = false;
      let previousMousePosition = { x: 0, y: 0 };

      const onMouseDown = (event) => {
        this.isDragging = true;
        previousMousePosition = {
          x: event.clientX,
          y: event.clientY,
        };
      };

      const onMouseMove = (event) => {
        if (this.isDragging) {
          const deltaMove = {
            x: event.clientX - previousMousePosition.x,
            y: event.clientY - previousMousePosition.y,
          };

          const deltaRotationQuaternion = new THREE.Quaternion().setFromEuler(
            new THREE.Euler(
              (deltaMove.y * Math.PI) / 9000,
              (deltaMove.x * Math.PI) / 9000,
              0,
              "XYZ"
            )
          );
          orb.quaternion.multiplyQuaternions(
            deltaRotationQuaternion,
            orb.quaternion
          );

          previousMousePosition = {
            x: event.clientX,
            y: event.clientY,
          };
        }
      };

      const onMouseUp = () => {
        this.isDragging = false;
      };

      document.addEventListener("mousedown", onMouseDown, false);
      document.addEventListener("mousemove", onMouseMove, false);
      document.addEventListener("mouseup", onMouseUp, false);
    },
  },
};
</script>

<style>
.scene-container {
  width: calc(100vw - 17px); /* Adjust the width to accommodate the scrollbar */
  height: 100vh;
  overflow: hidden; /* Prevent horizontal scroll */
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
