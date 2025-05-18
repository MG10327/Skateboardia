import { Billboard } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

interface HotspotProps {
  position: [number, number, number]; // position wil be an array of three numbers
  isVisible: boolean;
  color?: string;
}

export function Hotspot({
  position,
  isVisible,
  color = "#E6FC6A", // default color if one isn't passed in
}: HotspotProps) {
  const hotspotRef = useRef<THREE.Mesh>(null) // default value of null


  return (
    <Billboard position={position} follow={true}>
      {/* An element that will always face the camera so the user can always see the hotspots that will mark animations as existing. */}
      <mesh ref={hotspotRef} visible={isVisible}>
        <circleGeometry args={[.02, 32]} />
        <meshStandardMaterial color={color} transparent opacity={1} />
      </mesh>

      <mesh visible={isVisible}
        onPointerOver={() => {
          document.body.style.cursor = "pointer"
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'default'
        }}
      >
        <circleGeometry args={[.02, 32]} />
        <meshStandardMaterial color={color} transparent opacity={1} />
      </mesh>
    </Billboard>
  );
}