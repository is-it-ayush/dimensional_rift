const plane_fragment = `precision mediump float;

varying vec2 vUv;
uniform float color[3];

void main() {
    gl_FragColor = vec4(color[0], color[1], color[2], 1);
}`

export default plane_fragment;