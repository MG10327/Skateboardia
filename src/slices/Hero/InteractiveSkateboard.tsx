'use client' // client side rendering. Required for GSAP, three Drei + three fiber 3d work, use State use Ref, etc.

import { Skateboard } from '@/components/Skateboard'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import * as THREE from 'three'
import { useRef } from 'react'
import { MeshStandardNodeMaterial } from 'three/webgpu'
import { ThreeEvent } from '@react-three/fiber'
import gsap from 'gsap'

type Props = {}

export default function InteractiveSkateboard({ defaultTextureURL, wheelTextureURL, truckColor, boltColor}: Props) {
    const containerRef = useRef<THREE.Group>(null)
    const originRef = useRef<THREE.Group>(null) // this is for the front board trick so we can rotate from the center mid way through.


    const onClick = (event: ThreeEvent<MouseEvent>) =>{
        event.stopPropagation()

        const board = containerRef.current
        const origin = originRef.current

        if(!board || !origin) return // stops if there is no board

        const {name} = event.object

        // now we start our animations
        if(name === 'back'){
            ollie(board)
        } else if (name === 'middle') {
            // if the user clicks on the middle of the board we'll activate our kick flip animation
            kickflip(board)
        } else if (name === 'front') {
            frontSide360(board, origin)
        }



    }

    function ollie(board: THREE.Group){

        jumpBoard(board) // sends the board into the air first and then does the trick part
        // Tilts the board to mimick skateboard tricks. Tilts the board back and then straightens it bit by bit
        gsap.timeline()
        .to(board.rotation, { // animates to tilted back board to simulate an ollie.
            x: -.6,
            duration: .26,
            ease: 'none'
        })
        .to(board.rotation, { // animates to slightly less tilted board
            x: .4,
            duration: .82,
            ease: 'none'
        })
        .to(board.rotation, { // then animates to straight board
            x: 0,
            duration: .12,
            ease: 'none'
        })
    }


    // now we make our kickflip rotation animation
    function kickflip(board: THREE.Group){
        // Tilts the board to mimick skateboard tricks. Tilts the board back and then straightens it bit by bit
        jumpBoard(board) /// sends the board into the air first then does the trick part after

        gsap.timeline()
        .to(board.rotation, { // animates to tilted back board to simulate an ollie.
            x: -.6,
            duration: .26,
            ease: 'none'
        })
        .to(board.rotation, { // animates to slightly less tilted board
            x: .4,
            duration: .82,
            ease: 'none'
        })
        .to(board.rotation, {
            z: `+=${Math.PI * 2}`,
            duration: .78,
            ease: 'none'
        }, .3) // this is the position argument after all the other stuff. this means after X chained of time this animation will start so they don't all start at once
        .to(board.rotation, { // then animates to straight board
            x: 0,
            duration: .12,
            ease: 'none'
        })
    }


    function frontSide360(board: THREE.Group){
        jumpBoard(board) // sends the board into the air first then starts the trick

        // Tilts the board to mimick skateboard tricks. Tilts the board back and then straightens it bit by bit
        // We start with our kickflip animation as a base and add to it.
        gsap.timeline()
        .to(board.rotation, { // animates to tilted back board to simulate an ollie.
            x: -.6,
            duration: .26,
            ease: 'none'
        })
        .to(board.rotation, { // animates to slightly less tilted board
            x: .4,
            duration: .82,
            ease: 'none'
        })
        .to(origin.rotation, {
            z: `+=${Math.PI * 2}`, // 360 degree rotation
            duration: .77,
            ease: 'none'
        }, .3) // this is the position argument after all the other stuff. this means after X chained of time this animation will start so they don't all start at once
        .to(board.rotation, { // then animates to straight board
            x: 0,
            duration: .12,
            ease: 'none'
        })
    }


    // All boards will go up in the air and come down at the same rate
    function jumpBoard(board: THREE.Group){
                // Sends the board up and down
        gsap.timeline() // starts from the elements current state and animates to what we put in here
        .to(board.position, {
            y: .8,
            duration: .51,
            ease: 'power2.out',
            delay: .26
        }) // then to here
        .to(board.position, {
            y: 0,
            duration: .43,
            ease: 'power2.in'
        })

    }


    return (
    <div className='absolute inset-0 z-10 flex items-center justify-center'>
        <Canvas className='min-h-[60rem] w-full' camera={{position: [1.5, 1, 1.4], fov: 55}}>
            <Suspense>
                <Scene />
            </Suspense>
        </Canvas>
    </div>
  )
}

function Scene(){
    return (
        <group>
            <OrbitControls />
            <Environment files='hdr/warehouse-256.hdr' background />
            <group ref={originRef}>
                <group ref={containerRef}>
                    <group position={[0, -0.086, 0.635]}>

                        <Skateboard
                            wheelTextureURLs={[wheelTextureURL]}
                            wheelTextureURL={wheelTextureURL}
                            deckTextureURLs={[deckTextureURL]}
                            deckTextureURL={deckTextureURL}
                            truckColor={truckColor}
                            boltColor={boltColor}
                            constantWheelSpin
                        />
                        <mesh onClick={onClick} position={[0, 0.27, 0.9]} name='front'>
                            <boxGeometry args={[0.6, 0.2, .58]} />
                            <meshStandardMaterial visible={false} />
                        </mesh>

                        <mesh onClick={onClick} position={[0, 0.27, 0]} name='middle'>
                            <boxGeometry args={[0.6, 0.1, 1.2]} />
                            <meshStandardMaterial visible={false} />
                        </mesh>

                        <mesh onClick={onClick} position={[0, 0.27, -0.9]} name='back'>
                            <boxGeometry args={[0.6, 0.2, .58]} />
                            <meshStandardMaterial visible={false} />
                        </mesh>

                        <ContactShadows opacity={0.6} />
                    </group>
                </group>
            </group>
        </group>
    )
}