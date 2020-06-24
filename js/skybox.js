function setupCubeMap() {
  gl1 = this._renderer.GL;
  tex = gl1.createTexture();
  //gl.activeTexture(gl.TEXTURE0);

  gl1.bindTexture(gl1.TEXTURE_CUBE_MAP, tex);
  gl1.texParameteri(gl1.TEXTURE_CUBE_MAP, gl1.TEXTURE_MIN_FILTER, gl1.LINEAR);

  gl1.texImage2D(gl1.TEXTURE_CUBE_MAP_POSITIVE_X, 0, gl1.RGBA, gl1.RGBA,
    gl1.UNSIGNED_BYTE, wallside.canvas);
  gl1.texImage2D(gl1.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, gl1.RGBA, gl1.RGBA,
    gl1.UNSIGNED_BYTE, wallside.canvas);
  gl1.texImage2D(gl1.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, gl1.RGBA, gl1.RGBA,
    gl1.UNSIGNED_BYTE, wall.canvas);
  gl1.texImage2D(gl1.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, gl1.RGBA, gl1.RGBA,
    gl1.UNSIGNED_BYTE, wall.canvas);
  gl1.texImage2D(gl1.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, gl1.RGBA, gl1.RGBA,
    gl1.UNSIGNED_BYTE, wall.canvas);
  gl1.texImage2D(gl1.TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, gl1.RGBA, gl1.RGBA,
    gl1.UNSIGNED_BYTE, wall.canvas);
}

function renderSkybox() {
  //tex = gl.createTexture();
  shader(skybox);
  // set uniform variable for cubemap texture
  gl1.useProgram(skybox._glProgram);
  texLoc = gl1.getUniformLocation(skybox._glProgram, "cubeMap");
  gl1.uniform1i(texLoc, 0);

  gl1.depthFunc(gl1.LEQUAL);
  push();
  // right
  beginShape();
  vertex(1, -1, -1, 0, 0);
  vertex(1, 1, -1, 0, 1);
  vertex(1, 1, 1, 1, 1);
  vertex(1, -1, 1, 1, 0);
  endShape();
  //left
  beginShape();
  vertex(-1, -1, 1, 0, 0);
  vertex(-1, 1, 1, 0, 1);
  vertex(-1, 1, -1, 1, 1);
  vertex(-1, -1, -1, 1, 0);
  endShape();
  // top
  beginShape();
  vertex(-1, -1, 1, 0, 0);
  vertex(-1, -1, -1, 0, 1);
  vertex(1, -1, -1, 1, 1);
  vertex(1, -1, 1, 1, 0);
  endShape();
  //bottom
  beginShape();
  vertex(-1, 1, -1, 0, 0);
  vertex(-1, 1, 1, 0, 1);
  vertex(1, 1, 1, 1, 1);
  vertex(1, 1, -1, 1, 0);
  endShape();
  //front
  beginShape();
  vertex(-1, -1, -1, 0, 0);
  vertex(-1, 1, -1, 0, 1);
  vertex(1, 1, -1, 1, 1);
  vertex(1, -1, -1, 1, 0);
  endShape();
  // back
  beginShape();
  vertex(1, -1, 1, 0, 0);
  vertex(1, 1, 1, 0, 1);
  vertex(-1, 1, 1, 1, 1);
  vertex(-1, -1, 1, 1, 0);
  endShape();
  pop();
  // return z-depth test back to default mode
  gl1.depthFunc(gl1.LESS);
  resetShader();
}
