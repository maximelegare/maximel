/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

import React, { useRef, useEffect, useState, useContext, createContext } from 'react'
import { useFrame } from '@react-three/fiber'
import { GameEntity, EntityManager, Vehicle, WanderBehavior } from 'yuka'

const context = createContext()

export function Manager({ children }) {
  const [mgr] = useState(() => new EntityManager(), [])
  useEffect(() => {
    // This is called after all game entities are present, the manager should maintain game logic,
    // not the individual entities
    const vehicle = mgr.entities.find((item) => item instanceof Vehicle)
    vehicle.steering.add(new WanderBehavior())
  }, [])
  
  useFrame((state, delta) => mgr.update(delta))
  return <context.Provider value={mgr}>{children}</context.Provider>
}



export function useYuka({ position = [0, 0, 0] }) {

  const ref = useRef()
  const mgr = useContext(context)

  const [entity] = useState(() => new Vehicle())

  useEffect(() => {

    entity.position.set(...position)
    entity.setRenderComponent(ref, (entity) => {
      ref.current.position.copy(entity.position)
      ref.current.quaternion.copy(entity.rotation)
    })
    mgr.add(entity)
    return () => mgr.remove(entity)
  }, [])

  return [ref, entity]
}


















// import React, {
//   useRef,
//   useEffect,
//   useState,
//   useContext,
//   createContext,
//   ReactNode,
// } from "react";

// import type { Mesh } from "three";

// import { useFrame } from "@react-three/fiber";
// import { GameEntity, EntityManager, Vehicle, WanderBehavior,  } from "yuka";
// import { Vector3 } from "@react-three/fiber";

// const context = createContext(undefined);

// export function Manager({ children }: { children: ReactNode }) {
//   const [mgr] = useState<EntityManager>(() => new EntityManager());

//   useEffect(() => {


//     // This is called after all game entities are present, the manager should maintain game logic,
//     // not the individual entities
//     const vehicle = mgr.entities.find((item) => item instanceof Vehicle);

//     const vehicleAsVehicleType = vehicle as Vehicle

//     vehicleAsVehicleType.steering.add(new WanderBehavior());
//   }, []);
//   useFrame((state, delta) => mgr.update(delta));
  
//   return <context.Provider value={mgr}>{children}</context.Provider>;
// }

// export function useYuka({ type = GameEntity, position = [0, 0, 0] }) {

//   // This hook makes set-up re-usable
//   const ref = useRef<Mesh>();
//   const mgr = useContext(context);

//   const [entity] = useState(() => new type());

//   useEffect(() => {
//     // entity.position.set(...position);

//     entity.setRenderComponent(ref, (entity) => {

//       if(!ref.current) return

//       ref.current.position.copy(entity.position as unknown as THREE.Vector3);
//       ref.current.quaternion.copy(entity.rotation as unknown as THREE.Quaternion);
//     });
    
//     mgr?.add(entity);
//     return () => mgr?.remove(entity);
//   }, []);
//   return [ref, entity];
// }

//https://codesandbox.io/s/interesting-tree-f0rqo?file=/src/App.js
