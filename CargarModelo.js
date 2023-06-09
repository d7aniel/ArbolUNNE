import { GLTFLoader } from "./three/GLTFLoader.js";
export async function cargarModelo(archivo, objetoVacio) {
  var loader = new GLTFLoader();
  loader.load(archivo, function (gltf) {
    gltf.scene.scale.set(4, 4, 4);
    objetoVacio.add(gltf.scene);
    console.log("cargado");
  });
}
