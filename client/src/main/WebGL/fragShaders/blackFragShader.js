export default `
#ifdef GL_ES
precision mediump float;
#endif



#extension GL_OES_standard_derivatives : enable

void main() {
  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}`;
