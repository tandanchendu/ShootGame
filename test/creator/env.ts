import { loader } from "./preload.js";

const {
    math,
    Vec3,
    Quat,
} = await loader.import('cc');

export {
    math,
    Vec3,
    Quat,
};